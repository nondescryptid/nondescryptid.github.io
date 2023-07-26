---
tags: ['100daysofcode']
date: "2022-11-08T00:00:00Z"
title: day 53 - EMNLP 2022 search + making mobile look better
---
Implemented search by title -- filtering by track got me to learn how to use .filter(), search made me learn how to use .include(). Fixed some styling issues by adding text-wrap to my labels for each card, which was causing a horizontal overflow problem on mobile (esp for conference tracks with very long names) earlier on. My div with the filter+search elements was also way outside the viewport, which made me realise that divs don't inherit the dimensions of parents. So I ended up using [```fit-content```](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content) to get my ```div``` to fit the container. Frontend is fun, but it also makes my head hurt because there are so many kinds of behaviours to learn (don't even mention flexbox / grid).

But anyway, I'm glad that it kinda works now. There are a few more things I would like to learn to implement: 
- saving papers, and viewing them with localStorage 
- chaining multiple filters (e.g. filtering by submission type + track)
- allow multi-select for conference tracks, so that I can view several tracks' papers at once, as opposed to one track at a time (which is the case with my current dropdown)
- automating the generation of unique values for each type of filter (to get the array of conference tracks, I went to some random website that helps you remove duplicates from lists... not my best moment to be honest). The idea here, I guess, is to create something I can easily use for another kind of entity that I want to view and filter.
- make header sticky so my header doesn't jump about depending on the number of search results