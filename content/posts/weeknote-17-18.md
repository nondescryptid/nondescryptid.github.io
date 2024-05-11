---
date: '2024-05-11T23:47:36+08:00'
draft: false
title: 'Weeknote 17 & 18'
---

Double bill this time, because I've been kind of tardy.

# Week 17

 I took a silversmithing class with my university flatmate and got to interact with flux and solder in a non-electronics-related setting :) It was very calming to just focus on:

 - annealing the metal
 - marking out where to cut it
 - sawing it and filing to ensure a smooth join
 - actually joining it by applying flux, and then solder to the joint
 - shaping it into a rounder shape by hammering it on the mandrel 
 - grinding the ring down to create a wavy shape 
 - polishing it (done!)

![Two hands posing with rings on the index finger](https://res.cloudinary.com/dezwnhp01/image/upload/f_auto,q_auto/v1/weeknotes/IMG_9290)

# Week 18 

Lots of fighting with Jupyter & conda, and having to work with things I barely understand like UMAP/T-SNE and k-means clustering. My lack of math understanding and training feels like a real barrier. It is quite demoralising. 

I mostly did a lot of visualizations this week, but I don't know enough to properly understand why these techniques are useful and how to evaluate and optimize them. Like I get that dimensionality reduction can help us visualise how entities in a vector space are organised (since it's kinda hard to imagine.. 200 dimensions or something), but looking at my resulting visualizations feels like reading tea leaves most of the time. 

On the bright side, the `viridis` colormap is not only beautiful (in my opinion) -- it is [designed to be robust to colorblindness, and also work when printed as grayscale](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html). Accessibility win <3 so much thought goes into stuff like this.

Came across some code where a parameter for the number of worker threads was set to 500 when there's nowhere near enough resources to actually enable it to work efficiently. I LOL-ed slightly. 