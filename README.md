## LandingWebsite

> The landing page for DelegateIt.

### Install dependencies

With [Node.js](https://nodejs.org) installed, run the following one liner from the root directory:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Tools

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).

### Serve / Watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

The deployment-ready version is placed under the `dist` directory.

### Dependency Management

We use [Bower](http://bower.io) for package management. This makes it easy to keep your elements up to date and versioned. For tooling, we use npm to manage Node.js-based dependencies.
