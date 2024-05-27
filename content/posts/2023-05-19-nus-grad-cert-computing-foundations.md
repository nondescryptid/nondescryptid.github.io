---
date: 2023-05-19T00:00:00Z
title: "NUS Graduate Certificate in Computing Foundations: How it's going"

---
> Note: I originally wrote this on PubPub as I was still in the process of fiddling with my site. I hope this helps someone who's thinking about going back to school too :^)

## Brief overview of the NUS GC-CF 1

This is a part-time programme that's targeted at people who don't have a
formal undergraduate background in Computer Science (CS for short). It
consists of three courses:

-   IT5001 (Introductory programming course that everyone must take)

-   2 other modules, out of these 3:

    -   IT5002 Computer Systems and Applications; or

    -   IT5003 Data Structures and Algorithms; or

    -   IT5004 Enterprise Systems Architecture Fundamentals

You can read more about the NUS GC-CF 1 here:
<https://www.comp.nus.edu.sg/programmes/pg/certcf/.>

I started this programme in January 2023, and took 2 courses (IT5001 and
IT5003). I plan to take IT5002 in the semester starting August 2023.

## Quick note about taking IT5001 + IT5003 in the same semester

IT5001 is a pre-requisite for IT5003. IT5001 happens in the first 7
weeks, then IT5003 happens for the 8 weeks after that. The results for
IT5001 are confirmed about 3 weeks into IT5003.

This means that there is a risk of failing IT5001, then having to drop
out after 3 weeks of IT5003. The exact grades are not released to
students, but we were told that if we don't hear from the IT5001 team
after our IT5001 final, it means we passed the class overall and could
continue with IT5003. This was a risk I chose to take.

Taking both classes in the same semester also means that exams for
IT5001 will overlap with IT5003. There were some weeks where there was
class for IT5003 on Wednesday night and Saturday morning, then IT5001
exams in the afternoon / evening (Practical Exam + Final Exam).

## How much time did it take? A lot.  

### Personal context regarding the time I spent for each class

I did not enter the GC-CF I programme as a total beginner. I believe
that is the case for most of my GC-CF I classmates, as quite a few of
them were already working as software engineers / some sort of technical
role. For me, I've had a bit of experience with Python such that the
content in IT5001 felt familiar, besides Object-Oriented Programming +
basic search and sorting algorithms, which were new to me. However, I don't think my prior experience did anything for me in IT5003 and IT5002. 

### Class contact hours: about 5 hours a week 

There are 2 sessions per week for the part-time GC-CF I students. This
usually happens on a weekday from 6.30pm-8.30pm, and on Saturday from
9am-12pm.

The part-time GC-CF I students and Masters of Computing (General Track)
\[a.k.a MComp\] share the same classes with the same module codes.
However, the amount of contact hours + syllabus may differ slightly. For
IT5001, the MComp students had extra assignments in Java that we
part-timers didn't have. For IT5003, there was a Recitation session on
Friday afternoons where MComp students could attend, while most of us
part-timers were at work. 

## IT5001: Software Development Fundamentals (Jan-Mar 2023)

### Classes (5 hours a week)

-   Wednesday 6.30pm-8.30pm: Lecture

-   Saturday

    -   9am-10am: Lecture

    -   10am-12pm: Lab

Prof Alan Cheng was our lecturer for this semester. He's very funny and
personable, and doesn't expect us to do pre-lecture reading.

### Assessment 

#### Weekly Assignments (20%)

I found these very manageable ---they should be doable even if you don't
understand everything about the syllabus inside-out.

#### Midterm (20%) 

You're allowed an A4 cheatsheet for this exam. It's a smaller version of
the final where you'll have an MCQ section and some short-answer
questions where you have to fill in blanks, where each blank represents
a line of code.

#### Practical Exam (20%) 

This is an exam conducted on campus where you have to solve a few
problems within 2 hours. Code has to be submitted via the Coursemology
platform, and the catch is that you can only submit (i.e. run tests to
check if your code passes) your code 5 times. This was challenging but
fun.

#### Final Exam (40%) 

You're allowed an A4 cheatsheet for this exam.

I didn't enjoy this a lot as it seems to test more esoteric knowledge,
like what the following resolves to[^1]:

    f = lambda a, b: lambda x: b(b(a))
    f('c', lambda a: a * 3)(lambda a: a[:1])

When in reality one would run the code and maybe step through it with a
debugger if it's not clear (that's what I did anyway, since I'm not good
at lambda functions...) and realise it gives you 'ccccccccc'.

Another funny example[^2]:

    print(5-+-+-+-5) 

This feels illegal but is actually valid, and evaluates to 10.

### Time spent outside of class (\~3 hours a week) 

I spent about 3 hours outside of class a week (on average) working on
the assignments and studying, mostly because Prof Alan's lecture style
doesn't require us to do pre-reading + the content was largely familiar
except for the stuff at the end about Object-Oriented Programming and
Binary Search + Merge Sort.

### Syllabus (I got this from my lecture slide titles) 

Week 1: Usual intro, course information and what functions are

Week 2: Selection and Loops, Variable Scope, Recursion

Week 3: Recursion vs Iterations, Debugging, Sequences

Week 4: Higher Order Functions, Lists vs Tuples (mutable vs immutable)

Week 5: Higher Order Functions with Sequences (i.e. Lists) , File
Input/Output, Multi-dimensional Arrays

Week 6: Object-Oriented Programming (Multiple-inheritance etc), Image
Processing, Searching and Sorting

Week 7: Exceptions, Intro to Order of Growth, Memoization

### Unsolicited advice: 

I spent more time on the module towards the end as I had not worked on
my cheatsheet throughout the semester. This was a mistake on my part
---just keep a Word document around, and write down any weird quirky
behaviour about Python that you come across. It'll come in useful for
your cheatsheet.

## IT5003: Data Structures and Algorithms (Mar-May 2023)

### Classes (5 hours a week) 

-   Wednesday 6.30pm-8.30pm: Lecture

-   Saturday

    -   9-10am: Lecture

    -   10am-12pm: Lab

**Important note:** **This class was taught by Dr Steven Halim, who uses
the Flipped Classroom** **approach.** This meant that there was a fair
amount of reading to do each week. The readings came in the form of the
E-Lecture mode on [Visualgo](https://visualgo.net/en "null").

Please do your readings. I don't think I would've had a chance of
surviving if I went into lectures with 0 context, because he runs
lectures assuming that you've gone through the content and have some
basic idea about what's going on, and spends more time focusing on
complicated/less intuitive parts.

### Time spent outside of class (\~8-15 hours a week) 

IT5003 took about 3x or 4x the time that IT5001 took me. I attribute
this to the content being novel to me, and also the flipped classroom
approach meant that there was pre-class prep we needed to do.

Each week kinda ended up looking like this:

-   Wednesday lecture + weekly problem set (pset) release

-   Thursday - Weekends: Pre-reading for class, doing the pset

-   Monday to Wednesday: If I didn't manage to do the pset by the
    weekend, this was a bad crunch time.

### Assessment

#### Weekly Problem Sets (24%)

Each problem set consists of 2 problems (A and B). Problem A is easier
than Problem B. I would say the time I spent on problem sets was split
25%-75% between Problems A and B.

These were done on a platform called Kattis, which I would describe as
"Leetcode that's mostly used by universities"[^3]. The main challenge
for this is passing all the test cases, and doing so within the time and
memory limits of the automated judge.

#### VisuAlgo Quiz 1 (11%)

Covered sorting, lists, heaps. This is a quiz on the VisuAlgo platform
that's multiple choice / short answer with some other topic-specific
tasks, like drawing a graph and whatnot. This quiz is 15 minutes long.

#### VisuAlgo Quiz 2 (12%)  

Covers all topics of IT5003. This comes in the final week of class. This
quiz is 15 minutes long.

#### Final Exam (50%)

I came out of this feeling very defeated. I don't think I passed (at the
time of writing). There's a mix of MCQs, short-answer questions and a
final problem-solving part. You can check out a past paper
[here](https://www.comp.nus.edu.sg/~stevenha/cs2040c/tests/IT5003-2022-23-S1-final.pdf "null").

**Class participation (3%)**

### Syllabus

Official class site is here, with a detailed week-by-week syllabus:
<https://www.comp.nus.edu.sg/~stevenha/it5003.html.> There is no point
in me repeating it here ---you are better off looking at Dr Steven
Halim's site instead. He also has a draft schedule for the semester
starting in August 2023:
<https://www.comp.nus.edu.sg/~stevenha/it5003.html#lessonplannew>

### Unsolicited Advice/Reflections

Block the ranking system on Kattis. Kattis displays rankings for the
entire class and shows the first 30-ish who solve the problem set. I
used Brave browser's "Block Element" feature to prevent me from seeing
the little banner at the top of every page which shows your ranking for
the current problem sets. There was also a Rankings page, which I
generally avoided looking at until *after* solving the pset. I did this
because I realised it made me anxious to see that oh, people have solved
this within 2 hours of the pset being released while I'm still
struggling and failing Test Case 2/45. Perhaps you are more stoic, but
this is what worked for me as an anxious person.

Train for the VisuAlgo quizzes by doing the Training modules on
VisuAlgo. The quizzes have the highest time-to-points ratio. No other
part of the assessments will let you get 20-ish% of your grade in 30
minutes (total time for Quiz 1 + Quiz 2). I got blindsided by the weekly
assignments because I have this bad habit where I get incredibly hung up
on an unsolved problem, when I should've optimised for spending more
time on grinding out practice for the VisuAlgo quizzes instead. Don't
make my mistake!

Accept that the 8 weeks are going to be difficult. This was one of the
most challenging classes I've taken. Besides the content being new,
there's a psychological dimension where I had to manage my own feelings
about work not only being difficult, but also being in a class where
there are people who are miles ahead. The GC-CF I is not a genuine
introductory programme where everyone has the same degree of
inexperience. It feels more like being in a university language class
where people are like, *yeah I never studied this but I've been
translating anime subtitles for a few years as a self-taught Japanese
speaker*. I had classmates who would solve the psets within the same day they came out (if not, within hours), and they did
this *every week.*

The trick, I think, is to view this situation with a sense of awe and
curiosity rather than turning all these feelings into a way to put
yourself down like *oh I am terrible and so slow at this, I can't ever
get a job as a SWE*. Instead I like to think about stuff like: How did
they make their code more efficient? How did they think through the
problem? How can I do this too?

The good part of this being a classroom environment is that you know
there *is* a solution (and other people have found it). This is
different from research where one can possibly throw thousands of
dollars in grant money and years down the drain to find a solution which
may or may not actually exist. It also helps that a lot of people on the
class Discord are very helpful and generous with their time. I think all
this suffering throughout the course created a sense of camaraderie
where we all want to see each other pass test cases on Kattis.

At the time of writing (20 May 2023), I don't know if I've passed IT5003
as we haven't gotten our results. I suspect that even if I have, I've
gotten a C or D or something like that because my VisuAlgo quizzes were
pretty mid, and the Final was horrendous for me. But I've definitely
learned a lot, and I'm glad that I achieved what I set out to do.
Earlier in the semester, Dr Steven gave us a list of things to introduce
ourselves with:

![](https://assets.pubpub.org/59z5xjtt/51684517956677.png)

Here's my response from 18 Feb 2023:

![](https://assets.pubpub.org/zs58dfkj/61684518019463.png)

I think I've done what my past self was hoping to do. I deal with
struggling much better now, and also made some memes I was happy with
along the way:

![](https://assets.pubpub.org/bg11vl8o/51684518103947.jpg)

Hope this helps, and all the best with the GC-CF 1 if you end up doing
it!

[Update 27 May 2024: I forgot to update about this, but I somehow passed the class]


## IT5002: Computer Systems and Applications (Aug-Dec 2023)

I had talked a bit about this class on the [Project Intern](https://t.me/projectintern/20681) chat, but here's the full review! 

This class aims to cover 2 parts: (1) Computer Organisation and (2) Operating Systems. In the NUS CS undergrad curriculum, each part is covered by its own module, namely CS2100 (Computer Organisation) and CS2106 (Intro to Operating Systems). The undergrad equivalents cover these topics in a lot more depth. You can refer to materials for these classes too :D 

The most useful thing I can contribute would probably be recommendations for external resources, because I spent a lot of time scurrying about online finding alternative things to read. 

### Course outline: 

According to my notes on Obsidian: 

Week 1 - Intro 

Week 2 - Number systems 

Week 3 - MIPS Instructions I

Week 4 - MIPS Instructions II

Week 5 - Datapath 

Week 6 - Control Unit

Week 7 - Pipelining and Caching 

Week 8 - ??? (My notes somehow don't have this LOL)

Week 9 - Process Management and Scheduling

Week 10 - Scheduling and Inter-process Communication

Week 11 - Memory Management & File Systems

### Class hours (4 hours a week) 

- Tuesdays 6.30pm-9.30pm: Lecture
- Saturday: 1 hour tutorial (timing depends on which group you get assigned to)

### Time spent outside of class (on average 4-6 hours a week)

I had to spend quite a lot of time outside of class catching up because I found it hard to absorb content in 3 hour lectures after work. I spent less time overall on this class compared to IT5003, but it subjectively felt worse because I was just tired and confused after lectures because my attention span is quite short. I spent the bulk of my time outside of class consulting external resources and sometimes rewatching lectures.  

### Assessments

#### Tutorials/Labs (5%)

We get a weekly tutorial sheet to work on, but I was mostly really confused and not fully caught-up by the time the tutorial rolled around (on the bright side, tutorials were online). I've got to confess that I was profoundly silent on Zoom. Most of my participation in this module happened on the class Canvas forum where I tried to answer classmates' questions closer to finals, which was when things started clicking a bit more for me. 

#### Mid-term (25%)

This is heavy on number systems, tracing MIPS instructions and caching stuff. I did horrendous for this, and was relieved to find out that I had only failed the midterm by half a mark. There was something along the lines of "how many bytes will you need in total for a 48KB direct-mapped write-through cache (including tag and other bits)" and I was just like... huh ??

#### Take-home assignment (15%) 

The assignment concerns multithreading & multiprocessing in 
Python (this language choice probably occurs because most of the grad cert is taught in Python). Very doable (even by my standards). 

#### Final exam (55%)

I found this difficult to complete within the time limit (2 hours?). I didn't finish the paper. I frankly don't remember most of it because I felt really disoriented. There was a question that involved writing down the block numbers that a certain file's inode pointers would point to given that a particular thing has X sectors with Y blocks that are Z MB each or something.

### Unsolicited Advice / Resources I recommend 

Out of the 3 classes, I referred to external resources the most for this one. I didn't really use the recommended textbook(Computer Organization and Design by Patterson and Hennessy).

#### General: 
- Bernard Teo's reference sheets (may the traffic light always be green for you 🫡)
  - [CS2100 (Computer Organisation)](https://bernardteo.me/nus/CS2100%20Reference.pdf)
  - [CS2106 (Intro to Operating Systems)](https://bernardteo.me/nus/CS2106%20Reference.pdf)

#### Computer Organisation
- [NUS CS2100's extended notes site](https://www.comp.nus.edu.sg/~adi-yoga/CS2100/)
- [MIPS Assembly Language Programming Using QtSpim](https://open.umn.edu/opentextbooks/textbooks/734) - Specifically liked this for its explanations for number systems. In particular, the IEEE 754 32-bit floating representation.
- [this youtube video about Instruction Breakdown/Datapath](https://www.youtube.com/watch?v=oETOwVBzu1s&list=PLXVpmv0P_31NEAxXOW7KYCZ0P3YfFL76g&index=6)
- [Ep 074: Fully Associative Caches and Replacement Algorithms](https://www.youtube.com/watch?v=A0vR-ks3hsQ&list=PLXVpmv0P_31NEAxXOW7KYCZ0P3YfFL76g&index=3) and the next 2 videos in this series about Direct Mapped and Set-Associative Caches

#### Operating Systems
- [Operating Systems: Three Easy Pieces (OSTEP)](https://pages.cs.wisc.edu/~remzi/OSTEP/) - I used this for most of the course
- [Berkeley's CS162 lecture slides](https://cs162.org/) - I mostly relied on their slides for filesystems 
- [Quick overview of scheduling approaches and the priority inversion problem](https://pages.cs.wisc.edu/~bart/537/lecturenotes/s11.html)
  
[^1]: This one's modelled after a past-year question.

[^2]: Modelled after another past year question

