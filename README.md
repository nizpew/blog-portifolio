<div align="center">
  <h1>OUORZ-MONO</h1>
  <p>Source code & Docker image that power <a href="https://lipeng.ac" target="_blank">lipeng.ac</a> and other related projects</p>

  <a href="https://github.com/ttttonyhe/ouorz-mono">
    <img src="https://github.com/ttttonyhe/ouorz-mono/actions/workflows/main-app-testing.yml/badge.svg" alt="build status">
  </a>

  <a href="https://github.com/ttttonyhe/ouorz-mono">
    <img src="https://img.shields.io/github/license/ttttonyhe/ouorz-mono.svg" alt="license">
  </a>
</div>

<br/>

![screenshot-ouorz-com](https://user-images.githubusercontent.com/21199796/181861480-011d2fb7-6d7d-4d77-bbff-abb3c78c222d.png)

<br/>
<hr/>

## Main App

### Past Iterations

- Antony-Nuxt (Nuxt.js / Vue.js v2) [https://github.com/ttttonyhe/antony-nuxt →](https://github.com/ttttonyhe/antony-nuxt)
- Antony (Vue.js v2) [https://github.com/ttttonyhe/antony →](https://github.com/ttttonyhe/antony)
- Tony (Vue.js v2 / PHP) [https://github.com/ttttonyhe/tony →](https://github.com/ttttonyhe/tony)

<br/>

### Feature Highlights

- SSR/SSG/On-demand ISR
- Command palette
- Redux + Redux Saga state management
- [Nexment](https://github.com/ttttonyhe/nexment) comment system
- Dynamic table of contents sidebar
- Personal dashboard
- Dark mode

<br/>

### Summary of Tech Stacks

Super opinionated, completely overkill.

- TypeScript
- Framework
  - React (Next.js)
  - Foundation/Adaptor implementation *coming soon*
  - Storybook
  - Turborepo
- Data Fetching
  - swr
    - Infinite Loading
    - Revalidation
    - Suspense
  - fetch (API Routes)
- State Management
  - Redux Toolkit
  - Redux Saga
- Styling:
  - styled-components
  - Tailwind CSS
- Content Management:
  - WordPress (Qiniu - Static file storage)
  - WP REST API (GraphQL implementation coming soon)
  - Tencent Cloud CVM (CentOS/Nginx/MySQL/PHP)
  - [Nexment](https://github.com/ttttonyhe/nexment) (LeanCloud)
  - Newsletter (Listmonk)
- Error Logging & Web Vitals Metric
  - Sentry
- Linters
  - ESLint
  - Prettier
  - CommitLint
- CI/CD
  - Github Actions
  - Vercel

<br/>

### Project Setup

```bash
git clone git@github.com:ttttonyhe/ouorz-mono.git
pnpm install
cd apps/main
```

Create a `.env` file with your configuration, see below for a list of environment variables used in this project:

- LeanCloud:
  - NEXT_PUBLIC_LC_KEY
  - NEXT_PUBLIC_LC_ID
- Sentry:
  - NEXT_PUBLIC_SENTRY_DSN
  - SENTRY_AUTH_TOKEN
  - SENTRY_PROJECT
  - SENTRY_ORG
- On-demand ISR:
  - REVALIDATION_REQUEST_TOKEN

```
pnpm run dev:main
```

<br/>
<hr/>

## WordPress App
> **Warning**
> 
> Running WordPress in a Docker container is extremely slow on lower-spec machines
> 
> \>=1 GB of RAM without MySQL 8, or >=2 GB of RAM with MySQL 8 is recommended

This project is wrapped up in a Docker container built based on the official WordPress Docker image: [wordpress:php8.0-apache](https://hub.docker.com/layers/library/wordpress/php8.0-apache/images/sha256-121ce32b1837fa372989ae498eee6c7ff49e022715e035e00d65c8d07592a5d9).

<br/>

### Static Image

Each build outputs a static Docker image (similar to a typical containerized application) which means updating WordPress itself or adding new themes/plugins requires redeployment.

<br/>

### Persistent Storage

All uploads are stored in an external store (Qiniu, similar to AWS S3), therefore `wp-content/uploads` can be treated as temporary data.

<br/>

### Custom Themes

`main` app uses WordPress REST API to fetch data, `wordpress` app functions as a headless CMS. The theme `peg` is used to customize the behaviour of the REST API endpoints, therefore `peg/functions.php` should be the main focus when it comes to the development of `wordpress` app.

<br/>

### Environment Variables

- MySQL Database:
  - WORDPRESS_DB_HOST
  - WORDPRESS_DB_NAME
  - WORDPRESS_DB_PASSWORD
  - WORDPRESS_DB_USER
  - WORDPRESS_TABLE_PREFIX
- Settings:
  - WORDPRESS_DEBUG

Optionally, `WORDPRESS_CONFIG_EXTRA` can be set to include other configurations:

- MySQL SSL Connection:
  - `define("MYSQL_CLIENT_FLAGS", MYSQLI_CLIENT_SSL);`
- Turn Off PHP Warnings & Notices:
  - `ini_set("error_reporting", E_ALL & ~E_NOTICE);`
  - `ini_set("display_errors","Off")`
- Redis Object Cache:
  - `define("WP_REDIS_HOST", "redis_database_host");`
  - `define("WP_REDIS_PASSWORD", "redis_database_pwd");"`
  - `define("WP_REDIS_PORT", "redis_database_port")`

<br/>

### Local Development

```bash
docker build --tag ouorz-wordpress .
docker run -p 8080:80 \
-e WORDPRESS_DB_HOST=[dev_database_host] \
-e WORDPRESS_DB_USER=[dev_database_user] \
-e WORDPRESS_DB_PASSWORD=[dev_database_pwd] \
-e WORDPRESS_DB_NAME=[dev_database_name] \
-e WORDPRESS_DEBUG=true \
-e WORDPRESS_CONFIG_EXTRA="define('MYSQL_CLIENT_FLAGS', MYSQLI_CLIENT_SSL);" \
-e WORDPRESS_TABLE_PREFIX=[dev_database_prefix] \
ouorz-wordpress
```

<br/>
<hr/>

## Analytics App

This project is based on [Umami](https://umami.is)

### Geolocation Data Access
Follow the instructions [here →](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) to sign up for Maxmind GeoLite2, and retrieve a license key

<br/>

### Project Setup

```bash
git clone git@github.com:ttttonyhe/ouorz-mono.git
pnpm install
cd apps/analytics
```

Create a `.env` file with your configuration, see below for a list of environment variables used in this project:

- DATABASE_URL
- HASH_SALT
- MAXMIND_LICENSE_KEY

```
pnpm --filter @ouorz/analytics run build-postgresql-client
pnpm run dev:analytics
```

<br/>
<hr/>

## Twilight Toolkit

A super opinionated front-end toolkit library

![twilight-toolkit-storybook](https://user-images.githubusercontent.com/21199796/182478030-52acb1f1-c60d-415b-9924-195e9b9d2ca5.png)


### UI

Storybook: [https://ui.twilight-toolkit.ouorz.com →](https://ui.twilight-toolkit.ouorz.com)

Currently only available in React, Foundation/Adaptor implementation is coming soon.

<br/>

### Utilities

Work in progress

<br/>
<hr/>

## Monorepo

### Tooling

Build system: [Turborepo](https://turborepo.org) with Remote Caching

Monorepo Manager: [PNpm](https://pnpm.io/workspaces)

<br/>

### Practices

#### Running Scripts
+ Use project aliases to run commands in different packages more easily:
  ```bash
  pnpm --filter @ouorz/main run upgrade
  ```
+ Use pre-defined Turborepo scripts whenever content awareness (i.e. caching) is needed:
  ```bash
  pnpm run build:main
  ```

#### Managing Dependencies
+ Root `package.json` should only contain development dependencies

> WIP

<br/>

### Statistics

![Repobeats analytics image](https://repobeats.axiom.co/api/embed/f2cb67ca660ac944b8df17763a07e74eddbd187d.svg)

<br/>
<hr/>

## Development

### Gitflow

Not really following this though...

![git_branching_workflow](https://user-images.githubusercontent.com/21199796/135544887-50b1e78b-aa72-4e98-8f08-baac092cf393.jpg)

<br/>

### E2E Testing

Test runner: [Cypress](https://www.cypress.io)

Start server:

```bash
pnpm run build:main
pnpm run start:main

# or
cd apps/main
pnpm run dev:test
```

Run tests:

```bash
pnpm run test:main
```

`apps/main` uses Cypress Dashboard, disable it by changing the configuration file accordingly.

<br/>
<hr/>

## Deployment

### apps/wordpress

Build then deploy the Docker image via `apps/wordpress/Dockerfile`.

> Note: by default, the image listens on port 80, rather than the more common 8080

<br/>

### apps/main

This project utilizes a combination of Server-side Rendering (SSR) and (On-demand) Incremental Static Generation (ISG):

```bash
pnpm run build:main
pnpm run start:main
```

<br/>

### apps/analytics

```bash
pnpm run build:analytics
pnpm run start:analytics
```

<br/>

### packages/twilight-ui

To deploy the storybook, export it as a static web app:

```bash
pnpm run build:twilight:ui:storybook
```

<br/>

### Deploy with Fly.io

Configuration file `fly.toml` can be found under `apps/wordpress`. Persistent storage should mount to `/var/www/html/wp-content`.

```bash
fly launch

fly secrets set \
WORDPRESS_DB_HOST=[dev_database_host] \
WORDPRESS_DB_USER=[dev_database_user] \
WORDPRESS_DB_PASSWORD=[dev_database_pwd] \
WORDPRESS_DB_NAME=[dev_database_name] \
WORDPRESS_DEBUG=false \
WORDPRESS_TABLE_PREFIX=[dev_database_prefix] \

fly deploy
```

Optionally, volumes with the same name can be created in multiple Fly.io regions which allows Fly to run one or more instances of the app in multiple regions:

```bash
fly volumes create ouorz_wordpress_wp_content --region yyz --size 1 --no-encryption
fly volumes create ouorz_wordpress_wp_content --region fra --size 1 --no-encryption
fly volumes create ouorz_wordpress_wp_content --region hkg --size 1 --no-encryption
```

```bash
fly scale count 3
```

Optionally, Fly.io offers full-managed Redis databases which can be created using the following commands:

```bash
fly redis create
```

Traffic is automatically routed through a private IPv6 address restricted to your Fly organization.

<br/>

### Deploy with Vercel / Netlify

Make sure to set root directory path to `apps/<project-name>`, then update build command to the following:

```bash
cd ../.. && pnpm run build:<project-name>
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ttttonyhe/ouorz-mono)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ttttonyhe/ouorz-mono)

<br/>

Enabling diff-based deployment is highly recommended:

```bash
git diff --quiet HEAD^ HEAD ./
```

<br/>

## License
[GPL-3.0](https://github.com/ttttonyhe/ouorz-mono/blob/main/LICENSE)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fttttonyhe%2Fouorz-mono.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fttttonyhe%2Fouorz-mono?ref=badge_large)
