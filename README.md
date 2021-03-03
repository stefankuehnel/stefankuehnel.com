# stefankuehnel.com
[![Node.js](https://github.com/stefankuehnel/stefankuehnel.com/actions/workflows/node.js.yml/badge.svg)](https://github.com/stefankuehnel/stefankuehnel.com/actions/workflows/node.js.yml)
![CodeQL](https://github.com/stefankuehnel/stefankuehnel.com/workflows/CodeQL/badge.svg)
[![LightHouse](https://github.com/stefankuehnel/stefankuehnel.com/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/stefankuehnel/stefankuehnel.com/actions/workflows/lighthouse.yml)

The frontend, backend, and content source code for stefankuehnel.com

## Found a bug? 👷‍

Thanks for letting me know! Please [file an issue](https://github.com/stefankuehnel/stefankuehnel.com/issues/new?assignees=&labels=&template=bug_report.md&title=) and I should reply shortly.

## Building the site 🏗

You'll need a recent version of Node: v12.10 or higher.

### Clone the repo

```bash
git clone https://github.com/stefankuehnel/stefankuehnel.com.git
```

### Install dependencies

```bash
npm ci
```

### Start a local server to preview the site

```bash
npm run dev
```

Open `http://localhost:3000/` to see the site locally. Changes to assets will
rebuild the site. Refresh to see your changes.

## Deploying the site 🚀

The site will build and deploy the `main` branch automatically after every `git push origin main` via [Vercel](https://vercel.com).
