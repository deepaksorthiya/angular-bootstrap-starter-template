# Angular Bootstrap Starter Template

A sample Angular project with ngb bootstrap.

## Demo

[Live Demo](https://deepaksorthiya.github.io/angular-bootstrap-starter-template/)

## Technology Stack

```
Node: 24+
Package Manager: npm 11.9+
Angular CLI: 21.2.1
Angular: 21.2.2
```

---

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Generation Commands](#code-generation-commands)
- [Building](#building)
- [Testing](#testing)
- [Deployment](#deployment)
- [Additional Resources](#additional-resources)

---

## Project Structure

```
angular-bootstrap-starter-template/
├── src/
│   ├── app/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── README.md
└── ...
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/deepaksorthiya/angular-bootstrap-starter-template.git
   cd angular-bootstrap-starter-template
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

Start the local server:

```sh
ng serve
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

---

### Build and Run Docker Image

Build Image

```sh
docker build --progress=plain --no-cache -t deepaksorthiya/angular-bootstrap-starter-template .
```

Run Image

```sh
docker run --name angular-bootstrap-starter-template -p 8080:8080 deepaksorthiya/angular-bootstrap-starter-template
```

### Running On Kubernetes Minikube

```sh
kubectl apply -f k8s
kubectl port-forward service/angular-bootstrap-starter-template 30001:8080
```

---

## Available Scripts

- `ng serve` — Run the development server
- `ng build` — Build the project for production
- `ng test` — Run unit tests with Karma
- `ng e2e` — Run end-to-end tests

---

## Code Generation Commands

The following Angular CLI commands were used to scaffold this project:

```sh
ng generate component dashboard --skip-tests
ng generate component profile --skip-tests
ng generate component page404 --skip-tests
ng generate component attendance --skip-tests
ng generate component work --skip-tests
ng generate component login --skip-tests

ng generate module leaves --routing
ng generate component leaves --standalone false -m leaves --skip-tests
ng generate component leaves/apply --standalone false -m leaves --skip-tests
ng generate component leaves/holiday --standalone false -m leaves --skip-tests
ng generate component leaves/page404leaves --standalone false -m leaves --skip-tests

ng generate module leaves/balance --routing
ng generate component leaves/balance --standalone false -m balance --skip-tests
ng generate component leaves/balance/casual --standalone false -m balance --skip-tests
ng generate component leaves/balance/earned --standalone false -m balance --skip-tests
ng generate component leaves/balance/page404balance --standalone false -m balance --skip-tests

ng generate service services/auth --skip-tests
ng generate service services/authguard --skip-tests
ng generate guard guards/auth --skip-tests
```

---

## Building

To build the project for production:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

---

## Testing

### Unit Tests

Run unit tests with Karma:

```sh
ng test
```

### End-to-End Tests

Run e2e tests (configure your preferred framework):

```sh
ng e2e
```

---

## Deployment

To deploy to GitHub Pages:

```sh
ng deploy --base-href=/angular-bootstrap-starter-template/
```

---

## Angular Upgrade and Proxy

```sh
ng update @angular/core@20 @angular/cli@20

ng update @angular/core@21 @angular/cli@21

ng serve --proxy-config src/proxy.dev.conf.json
```

## Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Angular Documentation](https://angular.dev/)
