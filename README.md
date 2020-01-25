# nvcms-frontend

## Project creation log

```console
$ npx @vue/cli create nvcms-frontend
Vue CLI v4.1.2
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, U
nit
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N
$ cd nvcms-frontend
$ npm install -D @vue/cli
$ npx vue add vuetify
? Choose a preset: Configure (advanced)
? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
? Use custom theme? Yes
? Use custom properties (CSS variables)? No
? Select icon font Font Awesome 5
? Use fonts as a dependency (for Electron or offline)? No
? Use a-la-carte components? Yes
? Select locale Japanese
```

## Project setup

```console
npm install
```

### Compiles and hot-reloads for development

```console
npm run serve
```

### Compiles and minifies for production

```console
npm run build
```

### Run your unit tests

```console
npm run test:unit
```

### Lints and fixes files

```console
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
