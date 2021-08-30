# Terminal Nerd

This project is a monorepo containing a website app with its own API server,
which displays a list of useful tools for _terminal nerds or, soon to be,
terminal nerds_.

[monorepo]: https://en.wikipedia.org/wiki/Monorepo

---

## 📚 [Wiki]

**We put a lot of effort into our project [Wiki].** If you find within our
project an abbreviation or some jargon you don't understand, please take a look
at our [Dictionary page] on the Wiki. There's a chance you may find a short
explanation there.

[wiki]: https://github.com/terminal-nerds/terminal-nerd/wiki
[dictionary page]: https://github.com/terminal-nerds/terminal-nerd/wiki/%F0%9F%93%93-Dictionary

---

## 🌟 Our philosophy

We aim to create a **beginner-friendly and _fully transparent_ open-source
community project with a healthy atmosphere**.\
We want to treat novices in the same way we wish we were treated when we began
our adventure in writing code.

---

Placeholder for project idea

---

## 💻 Technology stack

This project uses the following technology stack, and there's short reasoning
as to why these choices.

| Technology                          | Reason                                                                                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Git logomark] [Git]               | As a core version control tool, because it can be used with [GitHub].                                                                                                                                              |
| ![GitHub logomark] [GitHub]         | As a cloud-based service that helps us store and manage our code. As well as track and control changes to the code. We also want to utilize all of its [features] to make our project transparent and open-source. |
| ![Node.js logomark] [Node.js]       | As the core JavaScript runtime for this project. It offers stability and a vibrant community collection of packages.                                                                                               |
| ![pnpm logomark] [pnpm]             | As the primary [Node.js] package manager, because it is fast, efficient, disk-saving, and has a feature - [workspaces] - built-in support for [monorepo] without using third-party tools.                          |
| ![TypeScript logomark] [TypeScript] | As the primary programming language because it offers a fantastic developer experience thanks to its toolings, typings, and helps find possible bugs we may not notice.                                            |
| ![Jest logomark] [Jest]             | As the core JavaScript testing library because it focuses on simplicity and can support any side of our project.                                                                                                   |

[git]: https://git-scm.com/
[git logomark]: https://api.iconify.design/simple-icons:git.svg?color=%2394f "Git logomark"
[github]: https://github.com/
[github logomark]: https://api.iconify.design/simple-icons:github.svg?color=%2394f "GitHub logomark"
[features]: https://github.com/features
[node.js]: https://nodejs.org/en/
[node.js logomark]: https://api.iconify.design/simple-icons:nodejs.svg?color=%2394f "Node.js logomark"
[pnpm]: https://pnpm.io/
[pnpm logomark]: https://api.iconify.design/simple-icons:pnpm.svg?color=%2394f "pnpm logomark"
[workspaces]: https://pnpm.io/workspaces
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[typescript]: https://www.typescriptlang.org/
[typescript logomark]: https://api.iconify.design/simple-icons:typescript.svg?color=%2394f "TypeScript logomark"
[jest]: https://jestjs.io/
[jest logomark]: https://api.iconify.design/simple-icons:jest.svg?color=%2394f "Jest logomark"

### Back-End technology stack

This combination of technologies will allow us to create a CRUD API that will be
utilized by the front-end UI.

| Technology                    | Reason                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Express logomark] [Express] | With a myriad of HTTP utility methods and middleware at our disposal, creating a robust API is quick and easy.                                                            |
| ![mongodb logomark] [MongoDB] | MongoDB’s document data model naturally supports JSON and its expressive query language is simple for developers to learn and use.                                        |
| ![Swagger logomark] [Swagger] | The module can identify the endpoints and automatically capture methods such as to get, post, put, and so on. Then will create API documentation regarding those methods. |

[express]: https://expressjs.com
[express logomark]: https://api.iconify.design/simple-icons:express.svg?color=%2394f "Express logomark"
[mongodb]: https://mongodb.com
[mongodb logomark]: https://api.iconify.design/simple-icons:mongodb.svg?color=%2394f "mongodb logomark"
[swagger]: https://www.npmjs.com/package/swagger-autogen
[swagger logomark]: https://api.iconify.design/simple-icons:swagger.svg?color=%2394f "Swagger logomark"

### Front-End technology stack

| Technology                                    | Reason                                                                                                                                                                                                                  |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Vue logomark] [Vue]                         | As a core Javascript User Interface Library, because it is approachable, versatile, and performant. It's rich community ecosystem should allow us to integrate well with other tools.                                   |
| ![Nuxt logomark] [Nuxt]                       | A framework for enhancing the developer's experience in building web applications with [Vue].                                                                                                                           |
| ![PostCSS logomark] [PostCSS]                 | For transforming CSS with it's plugins. It will help transpile future CSS and automate some of the developing parts to help focus less on the details such as cross-browser compatibility.                              |
| ![Sass logomark] [Sass]                       | It is the most mature, stable, compatible, and robust CSS pre-processor. Its rich features will help reduce some of the developing parts in writing styles to keep code clean, readable, and organized.                 |
| ![Tailwind CSS logomark] [tailwind css]       | As a temporary CSS library, to speed up the build and allows design directly in the markup. It should be flexible and able to be replaced by our own CSS library in the future.                                         |
| ![Storybook logomark] [Storybook]             | It will help build, document, and test User Interface components and pages in isolation. Also, it will allow us to supercharge our workflow with better organization as well as develop those hard-to-reach edge cases. |
| ![Testing Library logomark] [Testing Library] | Community-driven testing utilities that encourage good testing practices. It has support for [Vue] as well.                                                                                                             |
| ![Vercel logomark] [Vercel]                   | It offers an easy developer experience for deploying, shipping, and previewing Front-End applications. It also should integrate well with the other technology stack we're going to use in this project.                |

[vue]: https://v3.vuejs.org
[vue logomark]: https://api.iconify.design/simple-icons:vuedotjs.svg?color=%2394f "Vue logomark"
[nuxt]: https://nuxtjs.org
[nuxt logomark]: https://api.iconify.design/simple-icons:nuxtdotjs.svg?color=%2394f "Nuxt logomark"
[postcss]: https://postcss.org
[postcss logomark]: https://api.iconify.design/simple-icons:postcss.svg?color=%2394f "PostCSS logomark"
[sass]: https://sass-lang.com/
[sass logomark]: https://api.iconify.design/simple-icons:sass.svg?color=%2394f "Sass logomark"
[tailwind css]: https://github.com/tailwindlabs/tailwindcss
[tailwind css logomark]: https://api.iconify.design/simple-icons:tailwindcss.svg?color=%2394f "Tailwind CSS logomark"
[storybook]: https://storybook.js.org
[storybook logomark]: https://api.iconify.design/simple-icons:storybook.svg?color=%2394f "Storybook logomark"
[testing library]: https://testing-library.com
[testing library logomark]: https://api.iconify.design/simple-icons:testinglibrary.svg?color=%2394f "Testing Library logomark"
[vercel]: https://vercel.com
[vercel logomark]: https://api.iconify.design/simple-icons:vercel.svg?color=%2394f "Vercel logomark"

---

## 💕 [Contributing to the project]

**If you wish to contribute to this project, please take a look at the
[CONTRIBUTING.md](./CONTRIBUTING.md) file**. You will find instructions there
on how to navigate through our development processes.

Or... do you wish to be more involved in this project? **How about joining us
then?**\

> 🎺 Look at our [annoucement in the discussions], to read more!

[contributing to the project]: ./CONTRIBUTING.md
[annoucement in the discussions]: https://github.com/terminal-nerds/terminal-nerd/discussions/25

---

## ⚖️ Project license

[![license shield]](./LICENSE.md)

**The code** is licensed under the [MIT license](./LICENSE).

[license shield]: https://img.shields.io/github/license/terminal-nerds/terminal-nerd?style=for-the-badge

---

## 🔒 [Security Policy]

We have this [Security Policy] in place. **Our team treats security issues
seriously, as well as privacy breaches**. If you have noticed something, and you
trust your gut but you're not sure, then this is good enough for us. Please take
a look at the instructions in the [SECURITY.md](./SECURITY.md) file regarding
next steps.

[security policy]: ./SECURITY.md

---

## ✉️ Contact us

[![discord shield]][discord server]

**The best way to contact us is using our [Discord server]**. Anyone is welcome to
hop in for a chat, if you don't feel comfortable using [Discussions]. 🙂

[discord server]: https://discord.gg/decp3g7BEN
[discord shield]: https://img.shields.io/discord/862890839537877012?label=Discord&logo=discord&style=for-the-badge
[discussions]: https://github.com/terminal-nerds/terminal-nerd/discussions

**We are also open to feedback**. If you have any suggestions, feel free
to [start a discussion] in our project' repository or use "#💡-ideas" channel
on our [Discord server] and share your thoughts & ideas!

We would love to hear suggestions such as:

-   how to simplify the processes of developing steps,
-   making the project more transparent and accessible for everyone,
-   improving the education part for beginners to transform themselves into a
    **terminal nerd** easier - _make learning curve less steep_.

[start a discussion]: https://github.com/terminal-nerds/terminal-nerd/discussions/new

---

Placeholder for project root directory structure
