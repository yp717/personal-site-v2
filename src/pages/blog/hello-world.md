---
path: /blog/hello-world
title: Hello World
date: 2018-10-29
thumbnail: "../../images/kitten1.jpeg"
tags: ['cat', 'snow']
---

This is my first blog post. Hello World!

![Kitten One](../../images/kitten1.jpeg)

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```