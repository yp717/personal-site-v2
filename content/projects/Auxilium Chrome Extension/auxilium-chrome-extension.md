---
path: /projects/auxilium
title: Auxilium Chrome Extension
date: 2020-02-09
thumbnail: "./thumbnail.png"
tags: ['chrome extension', 'accessibility']
posttype: 'project'
published: true
description: Auxilium - An accessibility tool for developers
color: regal-blue
---

Most web developers aren't typically trained to think about accessibility. When you designed your site, did you ever think whether it would be legible and provide the same experience to say, someone with colour blindness? The internet can be a hostile space for 15% of the world's population who experience some form of disability and this can significantly impact their user experience.

Try navigating a website as someone who is visually impaired: Turn on voice command on your computer and go to Amazon's store. You'll quickly find out that those who rely on voice commands can't skip around and are doomed to listen to every notation about every page element before getting to the one piece of information they need. A 2016 Pew Research survey found that only 40% of disabled Americans feel comfortable using the internet compared to 80% of able-bodied users. In the UK, less than 30% are online.

Auxilium is a chrome extension that we built at IC Hack 20, Imperial College London's annual 24 hour hackathon. We tried to focus on building a proof of concept for different areas of accessibility design. 

## Designing for the masses isn't enough.

Dyslexia is a learning disability that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). 🔠 Reading is a pretty fundamental part of the web experience. Designers, engineers, and developers should consider this fraction of their user-base in their design process. Unfortunately, this typically not the case. 😞 It is difficult to justify ignoring 15% of your userbase.

## Never Depend on Color Alone to Convey Critical Information

Visual elements need to be considered carefully to ensure that accessibility is not lost for users with visual impairments. Such users often access websites with special high-contrast web browsers, screen readers, or by replacing CSS styles with a set of rules designed to remove visual barriers. The chrome extension we developed allows developers to visualise how the sites would look to people with different types of color blindness.

## Vision for Learning disabilities.

Many people find it difficult to read large blocks of text or extract key data points from passages. The final feature we included in our chome extension was a simple css swapping feature that swaps out the colours on alternate lines of text with more accessible colors. The idea is that this would make it easier to stay focused on your browsing session by helping you distinguish the lines on any longer page of text.

## Takeaways

None of the other projects have a section like this but I thought it might be interesting to discuss what I learned from this hack beyond working with chrome extensions and user experience design. This hackathon wasn't as productive or as much of a success as the last one and I think the reason is because we got carried away with the details and lost site of what we were trying to build. I had convinced myself I wanted to use react inside the chrome extension and so spend many hours trying to get this to work, fixing the issue by editing the webpack compiler which is a terrible idea (especially at a hackathon). Nonetheless, I had a great weekend at the hack and it was still a fun experience to work with my team and learn about chrome extensions, and designing the web more inclusively. If you're interested in knowing more about how we built this hackathon project, check out the repository on [github](https://github.com/SamuelTrew/Auxilium)!