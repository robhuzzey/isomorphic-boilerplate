# isomorphic-boilerplate

> For starting isomorphic projects

Table of Contents
-----------------

- [Background](#background)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Developing](#developing)
- [Building](#building)


Background
-----------

I needed a quick way to start up a project that is isomorphic

Prerequisites
-------------

- [Node.js 6.10.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/robhuzzey/isomorphic-boilerplate.git myproject
rm -rf .git # Prevents trying to push changes to this repo

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

Developing
----------

#### Client ([http://localhost:8080](http://localhost:8080))

```bash
npm run start
```

This will run a webpack server with a watch task & rebuild on any changes

#### Server ([http://localhost:3000](http://localhost:3000))

```bash
npm run server
```

This will run the build of the client side application then run a node server.

Building
--------
```bash
npm run build
````

Will create a bundle in `src/static/js/bundle/` suitable for deployment.

---

Pull requests accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
