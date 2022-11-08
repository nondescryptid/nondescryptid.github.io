---
title: archive
layout: default

---
  <h1 class="content-listing-header sans">everything everywhere all at once</h1>
  <table class="archive">
        {% for post in site.posts %}
    <tr>
        <td>{{post.date |date: "%F"}}</td>
        <td> <a href="{{post.url}}">{{post.title}} </a></td>
    </tr>
          {% endfor %}
  </table>

