

#TODO 
- [✓] converge on theme and remove access theme files
- [✓] make the iphone stuff work also
- [✓] make the container so it is centered core´rectly (also in docs)

- [✓] add markdown styles/theming
- look at storybook insp and decide on atomic structure design h
- add atomic structure and markdown style

- converge on icons and icon display
- converge and add typography and style tokens etc (figure out what should be included)
- make sure that the docs actually show the right code
- remove buttons at top that does not contribute 
- add figma into the repo
- remove the vite part and folloe [this lik](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode)
- setup tests pipeline and descripe how this is compoared to actual application testing with cypress!!!!
    - this project is a storybook templote with storybook related testing
    - the other one is a application testing with cypress and api testing
- add this


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
- add [storybook-addon-grid](storybook-addon-grid)  (background grid)
- add [addon-links](https://storybook.js.org/addons/@storybook/addon-links)(link as a prototype)
- add [addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y) (accessivbility)
- add [designs](https://storybook.js.org/addons/storybook-addon-designs) (add figma links)
- add [storysource](https://storybook.js.org/addons/@storybook/addon-storysource) (view exact story source code)
- 
