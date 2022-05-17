---
layout: default
title: posts
nav_exclude: true
# Note that this index page uses a full-width layout!
---
  <h1 class="content-listing-header sans">Posts</h1>
  <ul class="content-listing ">

    {% for post in site.categories.posts %}      
        <li class="listing">
          <hr class="slender">
          <a href="{{ post.url | prepend: site.baseurl }}"><h3 class="contrast">{{ post.title }}</h3></a>
          <br><span class="smaller">{{ post.date | date: "%B %-d, %Y" }}</span>  <br/>
          <div>{{ post.excerpt }}</div> 
        </li>
    {% endfor %}
  </ul>
