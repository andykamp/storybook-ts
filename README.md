

#TODO 
- converge on theme and remove access theme files
- converge on icons and icon display
- make the container so it is centered core´rectly (also in docs)
- make sure that the docs actually show the right code
- remove buttons at top that does not contribute 
- make the iphone stuff work also
- add figma into the repo
- remove the vite part and folloe [this lik](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode)
- setup tests


# Setup

This app was created using  `yarn create vite` with `react-ts`

The storybook was added with the `npx storybook init`


**!!!important!!!**

In order to run with node 18 and up you please follow this issues [link](https://github.com/storybookjs/storybook/issues/16555). 


# Styling and themes #
 
- followed this [Text](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode) to get dark/light mode
- use [geist](https://geist-ui.dev/) as theme and inspiration

- to style the storybook in additoin to the limited exposed dark/light theme, we can override stuff in the .storybook/manager-head.html. But here it is important to remember that it will not respect the dark/light theme :( 
- we can decorate each story with a **decorator** from ./src/decorators. This will add a nice border container to contain the componant and center it properly with correct colors
