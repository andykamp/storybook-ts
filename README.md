### OPS this setup is build for node version=18.3! If CI or chromatic fails it might be because of this.

## Aliases

To add aliases you have to: 
- manually update tsConfig.json paths
- path in vite.config.ts is automatically updated using [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) 
- manually update the **.storybook/main.ts** aliase aliases

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
- fix node version, tests and CI
- fix containers
- fix code in docs plugin and markdown code
- make sure that the docs actually show the right code
- 

- create headers etc in figma 
- add them to the docs and also add the figma files for them
- by default close the docs page and maybe add another icon/color to that spesific one? but at bottom?
- make sure that i clean up so it is as little dependent on geist icons and other stuff as possibel. ONLY WRITE ONCE so should be easy to change!!!!

- playground story has knobs to play width!!

- setup tests pipeline and descripe how this is compoared to actual application testing with cypress!!!!
    - this project is a storybook templote with storybook related testing
    - the other one is a application testing with cypress and api testing
    
- remove the vite part and folloe [this lik](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode)
- write a proper introduction page
- publish and deploy workflow
    - .github/workflows/storybook-tests.yml
    - dependabot
    - please release
- changelog
- precommits
    - create nice changelog (check)  


# Setup

This app was created using  `yarn create vite` with `react-ts`

The storybook was added with the `npx storybook init`


**!!!important!!!**

In order to run with node 18 and up you please follow this issues [link](https://github.com/storybookjs/storybook/issues/16555). 


# Styling and themes #
 
- followed this [Text](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode) to get dark/light mode
- use [geist](https://geist-ui.dev/) as theme and inspiration


# Plugins #

- we remove the background plugin because of the themeing
- add [storybook-add create nice changelog (check)on-grid](storybook-addon-grid)  (background grid)
- add [addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y) (accessivbility)
- [✓] add [designs](https://storybook.js.org/addons/storybook-addon-designs) (add figma links)
- [✓] add [storysource](https://storybook.js.org/addons/@storybook/addon-storysource) (view exact story source code)
