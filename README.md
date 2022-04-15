[Online demo](https://pokemon-hamid.netlify.app/)

## OVERVIEW 
  The app is pokedex, it should list pokemon number and name, and displays some basic 
  information about the pokemon to the side when it’s selected; image, name, type(s), 
  stats(HP, Attack, Defence, Speed), and preview of their evolution.

## REQUIRED FEATURES  
1. Use the [https://pokeapi.co](https://pokeapi.co/) API to get any pokemon information you need
2. Cache your API calls; we should not query the pokemon data a lot.
3. Smart pre-caching; when a user hovers over a pokemon pre-fetch his data and states, if a
   user selects a pokemon pre-fetch that Pokemon's evolution if any.

## Dependencies
- [Bootstrap](https://getbootstrap.com/): To design and customize responsive mobile-first sites (version 5).
- [MUI](https://mui.com/): React UI library - A customizable component library to build faster, beautiful, and more accessible React applications.
- [axios](https://github.com/axios/axios): A promise-based HTTP Client for node.js and the browser.
- [node-sass](https://www.npmjs.com/package/node-sass): Allows you to natively compile `.scss` files to `css`.
- [react-query](https://www.npmjs.com/package/react-query): Hooks for fetching, caching and updating asynchronous data in React.

## Setup and Run
1. Run `npm install` to install required dependencies
2. Run `npm start` to run the project and Open http://localhost:4000
4. Launch `Live Server` to prepare to run the test directly in the browser
3. Run `npm test` (in new terminal) to run the E2E testing
