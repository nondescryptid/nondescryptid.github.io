---
date: '2024-08-05T13:23:00+08:00'
draft: false
title: 'Weeknote 31'
---

I spent most of this week reading about Bangladesh's internet shutdown, internet shutdowns in general and looking at Tor metrics. This will probably have its own standalone post. 

I also spent a lot of the week reading about how to enforce Small Claims Tribunal orders as I'm working on helping a worker (who has no access to a laptop and also doesn't have a strong command of English) with his claim. ReignofComputer has a really detailed post about their journey of going after a landlord for a deposit and enforcing the money order made: [Enforcing a Claim under the Small Claims Tribunal](https://research.reignofcomputer.com/2022/05/16/enforcing-a-claim-under-the-small-claims-tribunal/)

The SG Courts website is a big fan of accordion elements, but it gets annoying when I see a piece of text on Google search results and then have to expand all the accordions before I can Cmd+F and find it on the page itself. Here's a Javascript snippet for expanding all accordions: 

```
document.querySelectorAll('button.accordion').forEach(button => {
  button.setAttribute('aria-expanded', 'true');
  const content = button.nextElementSibling;
  if (content) {
    content.style.display = 'block';
  }
});
```

You can try it on this page: [SG Courts | How to file and serve an employment claim](https://www.judiciary.gov.sg/civil/how-to-file-serve-employment-claim)


---
In other news: 
[MOE to remove Mobile Guardian app from students' devices after global cybersecurity breach](https://www.channelnewsasia.com/singapore/mobile-guardian-application-remove-cybersecurity-incident-moe-4526676)

I feel so bad for all the students who've had years of notes and resources wiped.