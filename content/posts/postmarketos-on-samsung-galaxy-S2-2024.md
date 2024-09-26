---
date: '2024-09-16T15:04:44+08:00'
draft: false
title: "My WiFi doesn't work because there are ghosts in the machine and magic in the batteries: postmarketOS on a Samsung Galaxy SII (i9100) in Sep 2024"
showtoc: true
---
I've got a Samsung Galaxy S II (i9100) lying around, and decided to try seeing if I can repurpose it and get it to host a blog. I was inspired by [compost.party](https://compost.party) -- a very cool server running off a Xiaomi Poco F1 using postmarketOS and a solar panel for charging. 

The physical nature of computing is usually not a concern, as things are sufficiently abstracted for me to not have to care too much about it. But trying to revive this phone from 2011 was a reminder that when we talk about compute, we are ultimately dealing with physical resources -- tiny towns with blocks of silicon, lithium, etc etc. 

This post will also talk more about the tools I found helpful in troubleshooting - I wasn't familiar with things like `dmesg`, `logread`, `rfkill`, `ip`, `iw` or `grep` before this, but this gave me a lot of practice. 

I've ended up killing this project (for now) because of issues with sourcing batteries (more on this later) and my lack of expertise in debugging problems with kernels and firmware, so this is sort of a journal entry/obituary for my i9100 and everything it's gone through so far. 


# Installing postmarketOS (pmOS)

pmOS can be installed with a tool called `pmbootstrap` or via a pre-built image for your device ([check if your device is on the list](https://postmarketos.org/install/)). 

## Things to note when using `pmbootstrap` for the i9100 
1. There is no pre-built image for the I9100, so you'll need to create the image and install it with `pmbootstrap` (postmarketOS build tool).
2. This requires an unlocked bootloader, but the I9100 bootloader is already unlocked so you don't need to do anything on your part. 
3. You will need Linux to use `pmbootstrap`. Fortunately, I've got an old Macbook Pro (A1278) running Ubuntu 22.04.
4. You should use v3 of `pmbootstrap` for the i9100. The wiki page for installation will encourage you to use the stable release, but you should ignore it. There is an issue (["i9100 Flashing mainline kernel fails with missing vmlinuz-dtb"](https://gitlab.com/postmarketOS/pmaports/-/issues/2735)) with previous versions of `pmbootstrap` that affects the i9100 and a few other phones that use a method of flashing called `iso-rec`. 

## Installing `pmbootstrap` from `git`

Follow the instructions [here](https://wiki.postmarketos.org/wiki/Pmbootstrap#From_git) for installation via git. Ignore the part where it encourages you to use the stable release. Make sure that when you check `pmbootstrap --version` that it starts with 3. 

## Configuring your OS image `pmbootstrap init` and building the OS image
Run `pmbootstrap init`. There will be a series of questions for configuration. 

One of the earliest prompts concerns which release channel you want to use.My experience regarding `edge` vs `stable` release channels: When configuring your pmOS installation, choosing the `edge` release channel may result in a lack of wifi scanning functionality. I tried `edge` on 21 Sep 2024 and it led to my `wlan0` appearing to be up, but was unable to scan for wifi networks. After trying the latest stable release channel `v24.06`, I was able to use wifi scanning.

When prompted for `vendor`, type `samsung` and when asked for your device's codename, say `i9100`. You can go with the default options for everything else. 

After you're done with configuring, use `pmbootstrap install`. This will build the image for your phone based on the information you've provided. 

## Installing postmarketOS on your phone
I won't belabour the point here - refer to [Instructions from the postmarketOS wiki for the Samsung Galaxy S II](https://wiki.postmarketos.org/wiki/Samsung_Galaxy_SII_(samsung-i9100)/Installation).

The phone will reboot in between `flash_rootfs` and `flash_kernel`. If it seems to be stuck in a boot loop after `flash_rootfs`, you can shut it off by just removing the battery and trying to enter ODIN/download mode again to do `flash_kernel`. After this, you should be able to use postmarketOS. 

## After booting: Enabling SSH and sharing internet with your phone over USB (since WiFi doesn't work yet)

At this point, WiFi does not work. 

To get started, I connected my phone to my laptop with a microUSB cable and connected via `ssh` so I could at least use the terminal with a proper keyboard (the on-screen keyboard is a bit small). 

If you kept the default username (`user`) in `pmbootstrap init`, you can connect with `ssh user@172.16.42.1` and then enter your password.

# The long-drawn struggle with WiFi 

## Debugging problems with WiFi 

The strange thing was that the WiFi screen in the Settings app on the phone wouldn't display any networks, but Bluetooth was working. WiFi and Bluetooth functionality are handled by the Broadcom BCM4330 chip. 

To get an idea what was going wrong, I tried running `dmesg`. This helps to review what's happening as the system starts up. 

### Me & my failed firmware load

I ended up finding this: 
```txt

[   18.099406] brcmfmac mmc2:0001:1: Direct firmware load for brcm/brcmfmac4330-sdio.samsung,i9100.bin failed with error -2

```

There were a lot of lines and this took a lot of scrolling, but if you're in the future and trying to check if your firmware load failed -- you can try something like `dmesg | grep samsung` which should narrow down your results compared to looking at the whole of `dmesg`. 

However, this was confusing because I didn't know where exactly the firmware was being loaded from. After some searching, I found that the Linux kernel typically expects firmware to be found in [`/lib/firmware`](https://www.linuxfromscratch.org/blfs/view/svn/postlfs/firmware.html). In this case, it was looking for Broadcom firmware in `/lib/firmware/brcm`. 

After visiting that folder and listing its contents (`$ ls /lib/firmware/brcm`) I realised it was empty, and that the firmware files were actually in `/lib/firmware/postmarketos/brcm`. 

The [postmarketOS wiki's WiFi page](https://wiki.postmarketos.org/wiki/WiFi) says: 
>Devices with Broadcom WiFi chips usually have the path to the firmware hardcoded in the kernel, mostly to /system/vendor/firmware.
>
>In most cases you should be able to set CONFIG_BCMDHD_FW_PATH and CONFIG_BCMDHD_NVRAM_PATH in the kernel config. In other cases, you need to patch the kernel and change the path to /lib/firmware/postmarketos (see this patch).

As someone who doesn't know how to configure a kernel, or where to even find the config, or what "patch the kernel" means" -- I decided to just do the most straightforward thing I could think of: 

1. Copy the firmware files from the `lib/firmware/postmarketos/brcm` directory to the `/lib/firmware/brcm` directory:

```bash
sudo cp -r /lib/firmware/postmarketos/brcm/* /lib/firmware/brcm/
```
2. Reboot with `sudo reboot` (though you could do this through the phone's UI too)

After doing this, the error message complaining about problems with loading `brcm/brcmfmac4330-sdio.samsung,i9100.bin` should go away. 

### Doing various checks on the `wlan0` interface 

After placating the kernel by putting the firmware at the location it was looking for it, I did the following checks: 

#### `ip a` 

This is meant to show and list all ip addresses associated on network interfaces. I use it to check if the `wlan0` interface even exists. 

Here's what it looked for me: 

```bash
samsung-i9100:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: usb0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 22:14:db:d6:a9:60 brd ff:ff:ff:ff:ff:ff
    inet 172.16.42.1/16 brd 172.16.255.255 scope global noprefixroute usb0
       valid_lft forever preferred_lft forever
    inet6 fe80::6ab0:a1b4:35df:aac7/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc pfifo_fast state DOWN qlen 1000
    link/ether 14:7d:c5:eb:47:2b brd ff:ff:ff:ff:ff:ff
```
`wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP>` indicates that the interface is up. 

#### `rfkill list`

This helps to check that `wlan0` is not being blocked by software or hardware.

```
samsung-i9100:~$ rfkill list
0: phy0: Wireless LAN
	Soft blocked: no
	Hard blocked: no
1: wlan0: Wireless LAN
	Soft blocked: no
	Hard blocked: no
```

If any of these interfaces are blocked, you can try `sudo rfkill unblock all` 

#### `nmcli dev wifi list`
`nmcli` is a command line interface for NetworkManager. You can scan for wifi with `nmcli dev wifi list`. If it's successful, it should show a list of networks near you. 

#### `iw reg get` and `iw reg set`

I didn't face an issue with the regulatory region, but if problems still persist even if `ip a` and `rfkill list` return happy outputs, you can try checking your regulatory region with `iw reg get` and `iw reg set $COUNTRY_CODE`. The `$COUNTRY_CODE` is the 2 letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). For instance, changing my regulatory region to Singapore would mean doing `iw reg set SG`.

## Sharing my laptop's internet connection with the phone
Being able to share my laptop's connection with my phone was helpful for experimenting with downloading some packages while troubleshooting. For instance, `iw` didn't come with the default pmOS (since I did not specify any additional packages to install). 

Follow the instructions here: [postmarketOS wiki: USB Internet](https://wiki.postmarketos.org/wiki/USB_Internet)

On the part of my phone, changing the nameserver with `echo nameserver 1.1.1.1 > /etc/resolv.conf` as suggested on the wiki didn't work even when I ran it with `sudo` as it kept saying I didn't have permission to do that. However, using `sudo vi /etc/resolv.conf` and editing the file to change `nameserver` to `nameserver 8.8.8.8` worked.

After that I tested my connection with `ping`.

## After all that, my i9100 only connects to my iPhone's hotspot and refuses to connect to anything else. 

Somehow, I'm able to connect to my iPhone's hotspot while connecting to my home's 2.4GHz and 5GHz networks which both use WPA2-AES has been a largely fruitless endeavour. I even tried various public WiFi networks by standing around outside Burger King and around various malls to no avail. 

When I try to connect to my home wifi with `wpa_supplicant`, I get all these complaints: 
```
[Sep 25 22:41:17] kern kernel: ieee80211 phy0: brcmf_proto_bcdc_query_dcmd: brcmf_proto_bcdc_msg failed w/status -110
[Sep 25 22:41:17] kern kernel: ieee80211 phy0: brcmf_cfg80211_get_channel: chanspec failed (-110)
[Sep 25 22:41:20] kern kernel: ieee80211 phy0: brcmf_proto_bcdc_query_dcmd: brcmf_proto_bcdc_msg failed w/status -110
[Sep 25 22:41:20] kern kernel: ieee80211 phy0: brcmf_cfg80211_get_channel: chanspec failed (-110)
[Sep 25 22:41:33] kern kernel: ieee80211 phy0: brcmf_run_escan: error (-110)
[Sep 25 22:41:33] kern kernel: ieee80211 phy0: brcmf_cfg80211_scan: scan error (-110)
[Sep 25 22:41:36] kern kernel: ieee80211 phy0: brcmf_proto_bcdc_query_dcmd: brcmf_proto_bcdc_msg failed w/status -110
[Sep 25 22:41:36] kern kernel: ieee80211 phy0: brcmf_cfg80211_get_channel: chanspec failed (-110)
[Sep 25 22:41:38] kern kernel: ieee80211 phy0: brcmf_proto_bcdc_query_dcmd: brcmf_proto_bcdc_msg failed w/status -110
[Sep 25 22:41:38] kern kernel: ieee80211 phy0: brcmf_cfg80211_get_channel: chanspec failed (-110)
```

I don't even know where to start with debugging this. 

When I tried `NetworkManager`, it'd constantly say `Connection activation failed: (7) Secrets were required, but not provided` even though my password was correct. I thought there were no secrets between me and my Nokia Beacon 1, but I suppose it begs to differ. I tried every fix I could find regarding this issue. I even tried changing the channels that my network used to match my iPhone hotspot in some kind of desperate last-ditch attempt to make things right.  

(For checkling logs from these services, I used `logread`)

Despite all my half-baked attempts to fix this problem, my phone still has only ever connected on one network -- my iPhone hotspot. Some kind of strange, forbidden electronic monogamy between my Samsung Galaxy and iPhone. I declare them husband and WiFi. 

![Samsung Galaxy S2 running postmarketOS displaying that it is connected to a wifi network called "unemployable pigeon"](https://res.cloudinary.com/dezwnhp01/image/upload/v1727370167/pmOS/photo_1_2024-09-27_01-02-37.jpg)

My WiFi doesn't work because there are ghosts in the machine and love in the air. 

# Power struggle (it could be the battery, or perhaps the charging port, or both)
I started having problems where I'd plug my charger in, then the phone would light up with an empty battery sign, and then go back to black. This would continue even as I left it plugged in for hours. 

I got a new battery at a shop at Sim Lim Square (Unicell on the 2nd floor) which worked for about a week, before it started having this problem too. I decided to try measuring the voltage on the battery and it came up to about 2.6V after 5 hours of charging. 

After leaving it overnight, I measured the voltage the next day and it came up to... 0.004V. 

![Multimeter reading showing a samsung galaxy s2 battery measuring 0.004v](https://res.cloudinary.com/dezwnhp01/image/upload/v1727374392/pmOS/photo_2024-09-27_02-12-56.jpg)

*We're totally back together*

Unicell gave me a replacement as I brought it back to the store within 30 days, and they verified that it really was unbelievably drained with their own multimeter. This was nice, as I got a bit loopy and started wondering if my multimeter was also broken. 

*We're so over*

The same problem appeared with the new battery. At this point, I feel like I've tried all I can think of and can't seem to surmount the problems with powering this device and also getting it to connect to my home wifi (much less powering it with solar). 
