---
date: '2024-04-16T12:36:46+08:00'
draft: false
title: 'Weeknote 15'
tags: ["weeknotes"]
---

This week, I
-  made [a ring using a baby tooth](https://kopiti.am/@nondescryptid/112256968366180370) I found while unpacking from moving. I kept most of my baby teeth in a ziploc bag (not sure why I did that, but I was pretty weird even as a kid). Google says people have 20 baby teeth, and I have 18 still with me, so that's a pretty good yield. Molars are good for rings because they've got quite a flat base and a rectangular shape. Could try other methods of setting the stone like a bezel set or prong set when I get access to the tools needed. I haven't really figured out what to do with incisors - maybe I'll get screw eye rings and turn them into charms for a necklace/bracelet.
-  first encountered and started using [`memory-profiler`](https://pypi.org/project/memory-profiler/). I came across some code that normalized JSON on a per-entry basis. `pandas.json_normalize` accepts JSON and returns a dataframe. This code called json_normalize for 1 entry, and then concatenates it to the existing dataframe. This ended up taking really long (>8 minutes for 35000+ entries) and I wanted to compare how much time and memory it'd take if one did the operation in batches of 5000 entries instead. `memory-profiler` was very helpful for this =) 
-  helped my friend fix their Mid-2015 A1502 Macbook Pro - we replaced the speakers and the Airport card. I realised I could help because I've done a speaker replacement on my own A1502. This repair was more special because my own A1502's just more of a backup laptop, but my friend's A1502 is their only laptop. Starting it up and being able to play music and access the Internet was honestly a really joyful moment. 
  