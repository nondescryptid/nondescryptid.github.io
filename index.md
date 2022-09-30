---
title: ""
layout: page
nav_exclude: true
---
☆૮꒰•༝  •。꒱ა

Hello! I'm Tomoe. 

I'm curious about the union of law, code and design. I like explaining things simply, building things, and competing in pub trivia.

<!-- 
Currently, I am helping to train a model to recognise entities in (Japanese) DMCA complaints.{% sidenote "sidenote-id" "Undergrad Research Assistant, NUS Law Centre for Technology, Robotics, AI and the Law (A/P Daniel Seng). You should read about his <a href='https://www.lumendatabase.org/blog_entries/lumen-researcher-interview-series-professor-daniel-seng'>doctorate journey."</a> %} I've also helped with coding Chinese interview data{% sidenote "sidenote-id" "Undergrad Research Assistant, Dr <a href='https://scholar.google.com/citations?user=2TnOeP0AAAAJ&hl=en'>Benjamin M. Chen</a>. This was my first job in college, and I remain grateful having the chance to work on something fun in my first year when school felt very dismal." %}, making infographics about matrimonial asset division {% sidenote "sidenote-id" "Volunteer, Legal Aid Bureau's LegalTech team (super nice people). The <a href='https://va.ecitizen.gov.sg/CSS/uploads/Infographic%2001.pdf'> infographic </a> is being used by iLAB (LAB's chatbot)." %}, and building a web app for a non-profit to manage client intake and matching with volunteers {% sidenote "sidenote-id" "TechLadies Bootcamp (for women with basic programming background). My teammates were all working full-time jobs, and I am in awe of them." %}.  -->

What I'm trying to do more of: Being a perpetual novice, understanding that [prestige is fossilized inspiration](http://www.paulgraham.com/love.html), convince people that sidenotes > footnotes.{% sidenote "sidenote-id" "We do not speak of endnotes here. Sidenotes, however, are imbued with the kind of joy that going off-trail on a hike has." %}


What I'm trying to avoid: excessive red tape, meetings that could've been emails, [asking to ask](https://dontasktoask.com/), a job that forces me to work regular office hours.

<h1 class="content-listing-header sans">Latest posts</h1>
  <ul class="content-listing ">

    {% for post in site.categories.posts limit:3 %}      
        <li class="listing">
          <hr class="slender">
          <a href="{{ post.url | prepend: site.baseurl }}"><h3 class="contrast">{{ post.title }}</h3></a>
          <br><span class="smaller">{{ post.date | date: "%B %-d, %Y" }}</span>  <br/>
          <div>{{ post.excerpt }}</div> 
        </li>
    {% endfor %}
  </ul>
