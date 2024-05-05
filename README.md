# Chris Bailey - New Age Piano Website (on Nuxt 3)
## Overview
This repository contains the source code for my [New Age Piano Website](https://chrisbaileypiano.com/), ported **from Vue.js 3.0 to Nuxt 3**.

For comparison, the original website's code is [shown here in basic HTML/CSS](https://github.com/chris-bailey/cbpiano-website-html). It was then [ported to Vue.js 3.0](https://github.com/chris-bailey/cbpiano-website-vue), before being finally ported to Nuxt 3. 

Vue.js 3.0 is an elegant front-end solution. Nuxt takes Vue, and surrounds it with ✨magic!✨

## Nuxt - Key Features
- **Enhanced Vue.js**: Nuxt 3 elevates Vue.js with advanced features.
- **Optimized Performance**: Increases speed and responsiveness of web applications.
- **SEO-Friendly SSR**: Server-side rendering of the first page served for better SEO scores.
- **Static Site Generation**: Or you have the option to easily create static, SEO-optimized sites.
- **Modern Development Tools**: Incorporates cutting-edge tools for web development. It has such a great debugging environment!


## Setup
For prerequisites please see the official [Nuxt Installation Guide](https://nuxt.com/docs/getting-started/installation).
```bash
npm install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Automatic Sitemap Generation
Automatically generate a sitemap at `yourdomain.com/sitemap.xml` with [nuxt-simple-sitemap](https://github.com/harlan-zw/nuxt-simple-sitemap).

### Step #1 - Install dependency
```bash
npm install -D nuxt-simple-sitemap
```

### Step #2 - Add module to `nuxt.config`
```ts
export default defineNuxtConfig({
  modules: ['nuxt-simple-sitemap'],
  site: {
    url: 'https://chrisbaileypiano.com'
  }
})
```

## Production
There are multiple ways to deploy a Nuxt 3 application. Thankfully, Nuxt has great [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

### Static Files
If you just want to have Nuxt generate a static website that can be placed on your webserver (or GitHub Pages): 
```bash
npx nuxi generate
```

You will find the generated files within the `.output/public` directory.

#### Vercel
This project is hosted within the free Hobby tier on Vercel. I simply connected Vercel to the repository and it worked immediately. I then updated the DNS records for chrisbaileypiano, and the task was complete.

### Universal Rendering
With this type of deployment your website will be running on Node.js. When a user or a web crawler hits your website, the server will **quickly generate the first HTML page** and send it in the response.

This fast server-side rendering (SSR) of the initial content makes the Google crawler happy which gives a boost to the website's SEO ranking; and it is also highly performant for users on less powerful devices.

After this initial page is sent, the rest of data is downloaded in the background. This step is called **hydration** as the page fills with all of the data it needs to convert into a **Vue Single Page Application** (SPA).

When the user clicks to navigate to another page on the website, they are now within a Vue SPA. Luckily a Google bot won't _click_ a link on the page. Users with JavaScript disabled might be surprised however when only the first page of the website loads properly.
