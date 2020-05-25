module.exports = {
  siteMetadata: {
    title: `Yannis Panagis`,
    siteUrl: 'https://www.yannispanagis.com',
    description: `Engineer. Designer. Developer. Student.`,
    author: `@gatsbyjs`,
    menuLinks:[
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Projects',
        link:'/projects'
      },
      {
        name: 'Blog',
        link:'/blog'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript", fsharp:"fsharp"},
              showLineNumbers: true,
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ]
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // additional instance of this plugin to read source nodes from second location in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `project`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yannispanagis.com`,
        short_name: `YannisPanagis`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/lego-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#1EB6FF',
        // Height of the scroll indicator
        height: '5px',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/blog/**'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    // This still needs the tracking id
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-167568011-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "yannispanagis.com",
    //   }
    // },
    // Read more @ https://www.gatsbyjs.org/packages/gatsby-plugin-smoothscroll/
    // can be used for scroll to animations
    // `gatsby-plugin-smoothscroll`,
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
    //     mergeCachingHeaders: true, // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //     generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}