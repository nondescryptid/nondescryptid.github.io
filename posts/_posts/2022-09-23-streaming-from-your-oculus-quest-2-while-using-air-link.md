---
title: "Streaming from your Oculus Quest 2 to Zoom while using Air Link, but your PC also has no WiFi"
layout: post
---
I don't know why you'd want to do this too, or have the same combination of problems. But if you do, here you go. <!--more-->


# Context

I was helping with organising a conference that involved an experiential VR component, where conference participants could try out apps on the Oculus Quest 2. However, one of the applications featured was a game on Steam that had no native Oculus app to install. {% sidenote "sidenote-id" "P.S. This was SR4-2, if you attended the conference." %}


This meant that we had to: 
- Download the Oculus app for PC (btw it has no Mac support)
- Pair the Oculus with the PC via a wired connection (USB-C) or Air Link (wireless, via WiFi)
- Start the game in Steam and choose "Launch with Steam VR"

And the conference was a hybrid conference, so we also had to: 
- Figure out how to stream what was happening on the Oculus to Zoom 


## Why not just connect it with a wired connection? 
We could've used a wired connection, but there was a concern about the experience being suboptimal (range of movement being limited by the length of the USB-C cable) and also risking participants tripping over wires. 

## Problems with Air Link and knock-on problems with streaming 
The PC we were using had no WiFi, and Oculus Air Link needs WiFi to work.{% sidenote "sidenote-id" "[Oculus Blog, Introducing Oculus Air Link](https://www.oculus.com/blog/introducing-oculus-air-link-a-wireless-way-to-play-pc-vr-games-on-oculus-quest-2-plus-infinite-office-updates-support-for-120-hz-on-quest-2-and-more/)" %}

The casting feature in Oculus (not in Air Link/wired mode) lets you show what the Oculus user is seeing if you log in on [oculus.com/casting](https://www.oculus.com/casting/) on Chromium browsers, when both the browser's device and the Oculus headset are on the same network. This feature is not available if you're connected to a PC, so you need to find some other way to show what's going on. 

For the conference, we were sharing the screen of a monitor that had 5 different Chrome windows logged on to the headsets' accounts. The 6th headset was the one that was linked to a PC, that couldn't be shown with the same method. 

## Solution/What We Ended Up Doing: WiFi Adapter + OBS Virtual Camera 
1. Acquire WiFi Adapter (We used an [Edimax AC1750](https://www.edimax.com/edimax/merchandise/merchandise_detail/data/edimax/global/wireless_adapters_ac1750_dual-band/ew-7833uac))
2. Set it up - install driver and whatnot
3. Go to Settings > Network & Internet > Mobile hotspot
3. Turn on Mobile Hotspot
4. Connect your Oculus headset to the PC's hotspot 
5. Turn on Airlink -> select your PC from the list of devices -> click Launch 
6. Launch your Steam game with Steam VR 
7. Use OBS Virtual Camera to do Window Capture of the Steam game's window, then Start Virtual Camera
8. Join Zoom Meeting and change camera output to OBS Camera 