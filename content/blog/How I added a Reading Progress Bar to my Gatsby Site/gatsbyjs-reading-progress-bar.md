---
title: Adding a Scroll Indicator to my GatsbyJS site in 10 minutes
date: 2020-05-09
thumbnail: "./thumbnail.png"
hero: "./hero.png"
tags: ['gatsby', 'javascript', 'reading progress bar']
posttype: 'blog'
description: The quickest way to add a reading progress bar to your GatsbyJS site
---

This is how I added a scroll indicator on the top of my site that shows how far a user. One of the reasons I'm such a huge fan of Gatsby is its plugin eco-system. There are plenty of tutorials and ways to do this from scratch or using other libraries but today I'll run you through how I used the simplest new Gatsby plugin: Scroll Indicator.

## So you've decided you want a scrolling progress indicator. Is it useful?

There are pros and cons to having a scrolling progress indicator, but chances are if you're here you may already know that. Still, before we go through how to implement one, I think it would be helpful to review the feature's advantages and disadvantages for those unsure or who stumbled here by accident.

The basic idea of the scrolling progress indicator is that it gives your readers an indication of their progress as they digest your content. Some people argue that it subconsciously makes the content, particularly in longer articles, feel shorter. That's probably the reason why they are predominantly used on blogs like this one. If that were true it would be great for improving your user's engagement with your content!

<!-- As a quick disclaimer, all the information presented is based on my personal opinions and experience and in no way reflects researched design theory and best UX practices. I have however, confirmed, the information presented with other sources.  -->

On the opposite site of the spectrum, many argue that the feature is completely useless and redundant. Further, some even find it distracting from the actual content they are trying to read because a lot of browsers still have native scroll bars anyway and some users just don't know what it is or expect it (my mum actually said this when she saw the site 😛). Particularly on mobile, there's another level of confusion for users because a loading progress bar is often used in the exact same location to indicate new content being loaded onto the site.

There's a lot to consider but if you're still reading, I'd recommend giving it a try because it's quick to implement and you'll know if it feels right for your site. If you're new to gatsby this plugin is also a nice way to get introduced to the gatsby plugin ecosystem.

The entire process can be broken down into 4 steps and completed in a little under 10 minutes.

## Step 1

Install all the necessary dependencies (in this case there's only one):

```{js}
npm install --save gatsby-plugin-scroll-indicator
```

For those of you less experienced with web development let's break this phrase down a little. Otherwise, if you're just looking for step by step instructions skip to step 2.

The NPM at the start is an abbreviation for the Node Package Manager. [NPM](https://www.npmjs.com/) is a package manager for the [JavaScript](https://en.wikipedia.org/wiki/JavaScript) programming language. You will see a lot of other tutorials also talk about another package manager called [yarn](https://yarnpkg.com/) but for simplicity let's stick with NPM here. I've been using NPM for most of the projects I worked on because its simple, consistent and comes as the default package manager for the JavaScript runtime environment [Node.js](https://nodejs.org/en/).

The next keyword `install` will install the package and any packages that it depends on. The `--save` bit just means that we want to save the package in our project, which means that next time we start everything up it'll all still be there. The last bit of the command is just the name of the package. Sounds simple enough right?

## Step 2

The second step is to add the plugin to your `gatsby-config.js` file. BUT before you do there are two ways to do this.

The simple way is just to add the plugin the way it comes out of the box.

```{js}
...
// gatsby-config.js
plugins: [
    `gatsby-plugin-scroll-indicator`
]
...
```

This should give you a progress bar on every single page on your site in which you can scroll, with a height of 3px and the timeless Gatsby purple `#663391`.

Chances are that you probably want to customize this a bit. Not to worry, it's actually quite simple to tweak the package to the needs of your site. All the values filled in below are the defaults directly from the github repository of the package.

```{js}
// gatsby-config.js
plugins: [
    {
        resolve: `gatsby-plugin-scroll-indicator`,
        options: {
            // set the color you want for your progress bar here
            color: '#663391',
            // set the height of the scroll indicator
            height: '3px',
            // Set specific paths where you want the scroll indicator using regex
            paths: ['/', '/blog/**'],
            // Configure the z-index of the indicator element
            zIndex: `9999`,
        },
    },
]
```

What I really like about this approach is that you don't have to make another React component and import it into every single file. The plugin, out of the box, does exactly what you want it to with minimal configuration which gets you up and running as fast as possible with your beautiful new plugin scroll indicator.