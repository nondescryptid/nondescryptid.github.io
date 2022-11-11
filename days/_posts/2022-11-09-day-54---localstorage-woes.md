---
title: "day 54 - localStorage woes"
layout: post
---
Wanted to try to create an array in localStorage, then push saved papers to it. This failed when I realised that localStorage stores everything as strings, so localStorage.getItem("saved").push(paper) wouldn't work. 

https://catalins.tech/store-array-in-localstorage/#:~:text=Get%20Array%20From%20localStorage,a%20string%20to%20an%20array.