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

We began planning this project in early October, with the vision to improve people’s daily lives.
Six months later, we have developed an end-to-end instant, reliable, and secure super- market checkout system using UHF RFID technology. We decided to kick off our project at IC Hack-2019 and built a first working prototype in under 24 hours, winning the DocSoc’s choice award.

## What is UHF RFID?

UHF RFID is an acronym for "Ultra high-frequency radio-frequency identification" and refers to a technology whereby digital data encoded in tags (consisting of an integrated circuit and an antenna) is captured by a reader via radio waves. UHF RFID is similar to bar-coding in that tag data can be used to identify supermarket items. It has, however, several advantages over systems that use bar-codes. The most notable is that tag data can be read outside the line-of-sight and from large distances (up to 500m).

## Technology and Engineering

A range of technologies was used to develop both the initial prototype and the final version of our system. This included but was not limited to jQuery, Raspberry Pis, Java, UHF RFID, Fusion 360, Python, ElectronJS, Azure, Ngrock, C++, Node.js, Ultrasonic Sensors, Laser Cutting, OpenCV, Antennas, HTTP, 3D Printing, SQLite, and CSS.

![System Level Schematic](/system-schematic.png)

After the initial hackathon prototype the system was redesigned according to a new specification with metal beams that were tapped and fixed together to improve the positioning of the antenna array. Here's a quick preview of the CAD visualization.  

![RFID CAD Visualization](/rfid-cad-model.png)

## Customer Experience

Improving customer’s shopping experience is at the heart of our mission at RFID Checkout. We aim to get the customer out of the store faster, without the long queue time and stress associated with traditional checkout systems.

![Customer Experience Info-graphic](/customer-experience-infographic.png)

We aimed for a traditional modular design where multiple units could be placed side by side. Our lightweight and strong aluminum frame gives us flexibility in design, allowing for hidden wiring and optimal antenna placement.

## Facial Recognition

Our face identification feature speeds up payment phase even further by recognizing clients in a matter of seconds.

We use OpenCV for pre-detection and Microsoft's Azure AI for customer recognition.

## Software

The checkout software was designed with ease of use in mind. We’ve tried hard to keep it simple to minimize adaptation time for older consumers. The app was built using ElectronJS to provide a robust framework for developing the friendly user interface.

![RFID Checkout ElectronJS App screen](/app-screen.png)
