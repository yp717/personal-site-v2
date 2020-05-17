---
path: /blog/gatsbyjjs-reading-progress-bar
title: Adding a Scroll Indicator to my GatsbyJS site in 10 minutes
date: 2020-05-09
thumbnail: "./thumbnail.png"
tags: ['gatsby', 'javascript', 'reading progress bar']
posttype: 'blog'
published: true
subtitle: subtitle could go here
color: red-orange
---

This is how I added a scroll indicator on the top of my site that shows how far a user. One of the reasons I'm such a huge fan of Gatsby is its plugin eco-system. There are plenty of tutorials and ways to do this from scratch or using other libraries but today I'll run you through how I used the simplest new Gatsby plugin: Scroll Indicator. 

### So you've decided you want a scrolling progress indicator. Is it useful?

- Background on the usability theory behind scrolling progress indicators
- mention that they are predominantly used on blogs


The entire process can be broken down into 4 steps and completed in a little under 10 minutes.

### Step 1: 

Install all the necessary dependencies (in this case there's only one):

```
npm install --save gatsby-plugin-scroll-indicator
```

For those of you less experienced with web development let's break this phrase down a litte. 

The NPM at the start is an abbreviation for the Node Package Manager. [NPM](link) is a package manager for the [JavaScript](link) programming language. You will see a lot of other tutorials also talk about another package manager called [yarn](link) but for simplicity let's stick with NPM here. I've been using NPM for most of the projects I worked on because its simple, consistent and comes as the default package manager for the JavaScript runtime environment [Node.js](link).

The next keyword `install` will install the package and any packages that it depends on. The `--save` bit just means that we want to save the package in our project, which means that next time we start everything up it'll all still be there. The last bit of the command is just the name of the package. Sounds simple enough right?

### Step 2: 

The second step is to add the plugin to your `gatsby-config.js` file. BUT before you do there are two ways to do this. 

The simple way is just to add the plugin the way it comes out of the box.

```
...
// gatsby-conig.js
plugins: [
    `gatsby-plugin-scroll-indicator`
]
...
```

This should give you a progress bar on every single page on your site in which you can scroll, with a height of 3px and the timeless Gatsby purple `#663391`.

Chances are that you probably want to customise this a bit. Not to worry, it's actually quite simple to tweak the package to the needs of your site. All the values filled in below are the defaults directly from the github repository of the package.

```
// gatsby-config.js
plugins: [
    {
        resolve: `gatsby-plugin-scroll-indicator`,
        options: {
            // set the color you want for your progress bar here
            color: '#663391', 
            // set the height of the scroll indicator
            height: '3px', 
            // Set specific paths for pages where you want the scroll indicator using regex
            paths: ['/', '/blog/**'],
            // Configure the z-index of the indicator element
            zIndex: `9999`,
        },
    },
];
```

What I really like about this approach is that you don't have to make another React component and import it into every single file. The plugin, out of the box, does exactly what you want it to with minimal configuration which gets you up and running as fast as possible with your beautiful new plugin scroll indicator. 