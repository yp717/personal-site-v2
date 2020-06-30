---
path: /projects/supermarket-checkout
title: RFID Supermarket Checkout
date: 2019-01-27
thumbnail: "./thumbnail.png"
tags: ['RFID', 'electrical engineering']
posttype: 'project'
published: true
description: An autonomous RFID Supermarket Checkout system
color: regal-blue
---

During my second year at Imperial, we were tasked with a second year project to design a problem that solves a solution. The actual brief was quite vague and when we started, I never thought this was the project we would end up working on.

![Kitten Three](/team-photo.png)

We began planning this project in early October, with the vision to improve people’s daily lives. Six months later, we developed an end-to-end instant, reliable, and secure super-market checkout system using UHF RFID technology. We decided to kick off our project at IC Hack-2019 and built the first working prototype in under 24 hours, winning the DocSoc’s choice award for "Best Overall Hack."

## What is UHF RFID?

UHF RFID is an acronym for "Ultra High-Frequency Radio-Frequency identification" and refers to a technology whereby digital data, encoded in tags (consisting of an integrated circuit and an antenna), is captured by a reader via radio waves. UHF RFID is similar to bar-coding in that tag data can be used to identify supermarket items. It has, however, several advantages over systems that use bar-codes. The most notable of these advantages is that tag data can be read outside the line-of-sight and from large distances (even up to 500m).

## Technology and Engineering

A range of technologies was used to develop both the initial prototype and the final version of our system. This included but was not limited to jQuery, Raspberry Pis, Java, UHF RFID, Fusion 360, Python, ElectronJS, Azure, Ngrock, C++, Node.js, Ultrasonic Sensors, Laser Cutting, OpenCV, Antennas, HTTP, 3D Printing, SQLite, and CSS.

![System Level Schematic](/system-schematic.png)

After the initial hackathon prototype the system was redesigned according to a new specification with metal beams that were tapped and fixed together to improve the positioning of the antenna array. Here's a quick preview of the CAD visualization.  

![RFID CAD Visualization](/rfid-cad-model.png)

## Customer Experience

The primary objective of the project became to improve customer's shopping experiences. We achieved this by getting the customer out of the store faster, without the long queue time and stress associated with traditional checkout systems.

![Customer Experience Info-graphic](/customer-experience-infographic.png)

We aimed for a traditional modular design where multiple units could be placed side by side. Our lightweight and strong aluminum frame also gave us flexibility in design, allowing for hidden wiring and optimal antenna placement.

## Facial Recognition

The facial recognition feature could even further speed up the payment phase of the checkout experience by recognizing clients in a matter of seconds. We used OpenCV for pre-detection and Microsoft's Azure AI for customer recognition.

## Software

The checkout software was designed with ease of use in mind. We tried hard to keep it as simple as possible to minimize adaptation time for all consumer groups. The app was built using ElectronJS to provide a robust framework for developing the friendly user interface and it looked a little like in the photo below.

![RFID Checkout ElectronJS App screen](/app-screen.png)

## Want to know more?

I tried to keep this post brief. If you're interested in finding out more about the project, don't hestitate to reach out somewhere in the footer. I'm happy to discuss any aspects of the project if you're interested in building something similar, or are just interested in more of the details.