# Contributing

**Thank you** very much for sparking an interest in contributing to this project.
😊

Any of your contributions, small or large, are very much appreciated and
make this project better for the open-source community.

## 🔗 Table of Content

-   [Code of Conduct](#code-of-conduct)
-   [Our philosophy](#our-philosophy)
-   [Coding style guidelines](#coding-style-guideliness)
-   [Git setup](#git-setup)
    -   [Git commits convention](#git-commits-convention)
-   [Scripts](#scripts)

---

## 📜 [Code of Conduct]

[![contributor covenant shield]][code of conduct]

Keep in mind that this project is released with a [Contributor Covenant] **Code
of Conduct**.\
By contributing to this project, **you agree to abide by its terms**.

[contributor covenant shield]: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge "Contributor Coventant shield"
[contributor covenant]: https://www.contributor-covenant.org/
[code of conduct]: ./CODE_OF_CONDUCT.md

---

## 🌟 Our philosophy

We aim to create a **beginner-friendly and open-source project with a healthy
atmosphere**.\
We want to treat novices in the same way we wish we were treated when we began
our adventure in writing code.

---

## 📔 Coding style guidelines

1. **Please don't write short syntax and abbreviations**.\
   Make the code easy to read, understandable, and very communicative, even if
   that will be more verbose and take more time/effort to write. Put yourself
   in the shoes of other contributors, especially when they just began their
   journey as a developer.\
   **It also regards file(s) and directory(ies) naming!**

1. **Write functions with declarative names** _(non-anonymous)_.\
   If your function is complex, then instead of arrow functions _(unless you
   need to use lexical `this` or have other good reason)_, declare it as
   a standard function with a descriptive name.

1. **Try to follow the good practices of the JavaScript naming conventions.**\
   Credits to [the article about the naming convention best practices].

    - **Constants** - Capital letters _(UPPERCASE)_

    ```js
    const SECONDS = 60;
    const MINUTES = 60;
    const HOURS = 24;
    const DAY = SECONDS * MINUTES * HOURS;
    ```

    - **Variable** - camelCase

    ```js
    const firstName = "Matt";
    ```

    - **Boolean** - camelCase and with one of the following prefix: `is`,
      `are`, `has`

    ```js
    const isVisible = true;
    const areEqual = false;
    const hasEncryption = true;
    ```

    - **Function** - camelCase

    ```js
    function getName(firstName, lastName) {
    	return `${firstName} ${lastName}`;
    }
    ```

    - **Class** - PascalCase

    ```js
    class SoftwareDeveloper {
    	constructor(firstName, lastName) {
    		this.firstName = firstName;
    		this.lastName = lastName;
    	}
    }
    ```

    - **Methods** - camelCase

    ```js
     class SoftwareDeveloper {
         getName() {
             return ( ... );
         };
     }
    ```

    - **Private** - camelCase and with an underscore (`_`) prefix

    ```js
     class SoftwareDeveloper {
         constructor(firstName, lastName) {
             this.name = _getName(firstName, lastName);
         }

         _getName(firstName, lastName) {
             return `${firstName ${lastName}`;
         }
     }
    ```

    - **Components** _(in any framework)_ - PascalCase

    ```js
     const UserProfile = (props) {
         return ( ... );
     }
    ```

1. **Make your commit messages descriptive and ordered.**\
   Don't be afraid to edit the commit history during the Pull Request.
   Please ensure it's explaining pretty straightforward with what's going on
   and the changes it relates to.

    - It is preferable to see changes be split into **small commits**, so they
      explain step by step. Quantity is not essential, but the quality of
      communication and educating/informing contributors will help a lot.

1. **Organize imported modules in the code.**\
   This way, we can visually see which modules are ours from this project and
   which one has been imported from `node_modules` or Node.js packages /
   built-in modules.

[the article about the naming convention best practices]: https://javascript.plainenglish.io/javascript-naming-convention-best-practices-b2065694b7d

---

## 🛠️ Git setup

### Git commits convention

[![Conventional Commits shield]][conventional commits] [![Gitmoji shield]][gitmoji]

**This project uses [Conventional Commits], and [Gitmoji] commits
conventions.**

[conventional commits shield]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge
[conventional commits]: https://conventionalcommits.org "Conventional commits convention"
[gitmoji shield]: https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=for-the-badge
[gitmoji]: https://gitmoji.dev "Gitmoji convention"

---

## 🧰 Scripts

👉 **REMINDER:** This project uses [`pnpm`] as [Node.js] package manager.

[`pnpm`]: https://pnpm.io/
[node.js]: https://nodejs.org/en/

The following scripts are available for this project:
