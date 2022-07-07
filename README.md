# My | Design System

This Repo depicts the best way to create a reusable component library in my opinion. It serves as my default template for all side-projects that require any UI.

Theme/design is inspired by (and uses)  [the Geist-UI component library](https://www.geist-ui.dev/) and [the Vibe design system storybook](https://style.monday.com/?path=/docs/welcome--page) because of its simplicity and readablity.

❗️**OPS this setup is build for node version=16x If CI or chromatic fails it might be because of this**

## Installation

## Usage
All scripts can be found in **package.json**. The most common is listed below:

Development:
```bash
# serve the storybook locally for development
yarn storybook  
```

Testing:
```bash
# Unit-tests: run all unit tests postfixed with **.tests.(ts|tsx)**
yarn test
```

```bash
# UI-tests: run test-suit with rendering -and interaction tests
yarn test-storybook
```

```bash
# Visual-regression-tests: deploy to chromatic 
yarn test-visual
```


# CI
All CI is performed by Github actions and can be found in the **.github/workflows** folder:
- Unit-tests (./github/workflows/unit-tests.yml)
- UI-tests (./github/workflows/storybook-tests.yml)
- Visual-regression-test (./github/workflows/chromatic.yml)

# Publishing
For others to import the UI we publish the package to NPM
- 

```bash
yarn publish 
```



# Setup

This app was created using  `yarn create vite` with `react-ts`

The storybook was added with the `npx storybook init`

After that alot of shit has been added to the .storybook etc. Some but not all are:
- aliases (tsConfig.json and vite.config.ts)
- styling 
- test system
    - test-suit
    - jest unit tests
    - interaction tests
    - visual test with chromatic
- .github/workflows (chromatic, storybooko test-suite and unit tests with jest)


### Aliases ###

To add aliases you have to: 
- manually update tsConfig.json paths
- path in vite.config.ts is automatically updated using [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) 
- manually update the **.storybook/main.ts** aliase aliases
**!!!important!!!**

In order to run with node 18 and up you please follow this issues [link](https://github.com/storybookjs/storybook/issues/16555). 


# Styling and themes #
 
- followed this [Text](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode) to get dark/light mode
- use [geist](https://geist-ui.dev/) as theme and inspiration


# Plugins used are #

- add [storybook-add create nice changelog (check)on-grid](storybook-addon-grid)  (background grid)
- add [addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y) (accessivbility)
- [✓] add [designs](https://storybook.js.org/addons/storybook-addon-designs) (add figma links)
- [✓] add [storysource](https://storybook.js.org/addons/@storybook/addon-storysource) (view exact story [source](source) code)


#TODO 
- [✓] converge on theme and remove access theme files
- [✓] make the iphone stuff work also
- [✓] make the container so it is centered core´rectly (also in docs)

- [✓] add markdown styles/theming
- [✓] add figma into the repo
- [✓] look at storybook insp and decide on atomic structure design h
- [✓] add atomic structure and markdown style
- [✓] optimize icon gallery like in storybook ragnarivisiion. Currently very slow
- [✓] converge on icons and icon display
- [✓] converge and add typography and style tokens etc (figure out what should be included)
- [✓] remove buttons at top that does not contribute 
- [✓] clean up /docs  
- [✓] add aliasing (https://storybook.js.org/docs/react/builders/vite)
- [✓] fix node version, tests and CI
- [✓] create headers etc in figma 
- fix containers
- fix code in docs plugin and markdown code
- make sure that the docs actually show the right code
- 

- by default close the docs page and maybe add another icon/color to that spesific one? but at bottom?
- make sure that i clean up so it is as little dependent on geist icons and other stuff as possibel. ONLY WRITE ONCE so should be easy to change!!!!

- playground story has knobs to play width!!

- [✗] setup tests pipeline and descripe how this is compoared to actual application testing with cypress!!!!
    - this project is a storybook templote with storybook related testing
    - the other one is a application testing with cypress and api testing
    
- remove the vite part and folloe [this lik](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode)
- write a proper introduction page
- [○] publish and deploy workflow
    - [✓] .github/workflows/storybook-tests.yml
    - [✗] dependabot
    - [✗] please release
- changelog
- precommits
    - create nice changelog (check)  

