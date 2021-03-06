<h3 align="center"> <| desktop preview |> </h3>

<p align="center">
  <img src="https://raw.githubusercontent.com/trolit/trolit.github.io/storage/images/scr1.png" alt="Portfolio - preview 1" width="90%"/>
</p>

<h3 align="center"> <| mobile preview |> </h3>

<p align="center">
  <img src="https://raw.githubusercontent.com/trolit/trolit.github.io/storage/images/scr2.png" alt="Portfolio - preview 2" width="50%"/>
</p>

Made from <a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma">gatsby-theme-emma starter</a> done by <a href="https://github.com/LekoArts/">LekoArts</a>

### <a href="https://trolit.github.io/">live preview</a>

#### Main changes
- added scss & attribute to body `data-theme` which can be used to add custom stylings for dark mode via scss
- added projects exporting to PDF file with jsPDF that can be adjusted to personal needs
- added avatar to the header component
- added on main page constant information showing for each project(width < 770)
- removed project item resize animation on the main page
- changed amount of information shown on project item hover

### How to use?

Clone or fork, overwrite GraphQL queries after `npm install` and adjust to personal needs 😋

#### Important note

Since shadowing GraphQL queries results in compilation warnings(can be ommited but produces annoying text 😄) I would suggest to overwrite query files and gatsby-node.js from your node_modules after using `npm install` command. How to do it?

1. (optional) Copy and update path given below, according to your repo location <br/> `{DRIVE}:\{DIR1}\{REPOSITORY}\node_modules\@lekoarts\gatsby-theme-emma-core` 
2. Use it to quickly go to the destination or jump there from clicking from dir to dir =)
3. Copy content of these files(<a href="https://raw.githubusercontent.com/trolit/trolit.github.io/storage/npm/gatsby-node.js">gatsy-node.js</a>, <a href="https://raw.githubusercontent.com/trolit/trolit.github.io/storage/npm/project-query.tsx">project-query.tsx</a>, <a href="https://raw.githubusercontent.com/trolit/trolit.github.io/storage/npm/projects-query.tsx">projects-query.tsx</a>) and overwrite them after running `npm install`.
5. `gatsby develop` project

### References
- <a href="https://github.com/mui-org/material-ui">material-ui for React</a>
- <a href="https://github.com/MrRio/jsPDF">jsPDF</a>
- <a href="https://github.com/sass/node-sass">node-sass</a>
- <a href="https://iconify.design/">Iconify design</a>
- <a href="https://github.com/KyleAMathews/typography.js/">typography.js</a>
- <a href="https://github.com/PaulieScanlon/mdx-embed/tree/main/packages/gatsby-plugin-mdx-embed">gatsby-plugin-mdx-embed</a> (package of <a href="https://github.com/PaulieScanlon/mdx-embed#readme">MDX Embed</a>)
