---
layout: default
title: 100 days of code
# Note that this index page uses a full-width layout!
---
  <h1 class="content-listing-header sans">Posts</h1>
  At this point it's more like trying to post 100 times about what I've done, rather than doing it 100 days in a row...

  P.S. What you see are  (first 50 words), so click on the post title if you want to see the whole thing.
  
  <ul class="content-listing ">
    {% for post in site.categories.days %}      
        <li class="listing">
          <hr class="slender">
          <a href="{{ post.url | prepend: site.baseurl }}"><h3 class="contrast">{{ post.title }}</h3></a>
          <br><span class="smaller">{{ post.date | date: "%B %-d, %Y" }}</span>  <br/>
          <div>{{ post.content | strip_html | truncatewords: 50 }}</div> 
        </li>
    {% endfor %}
  </ul>
