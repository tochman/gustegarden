This is a step by step process of setting up and deploying a website for Gustegården, a hobby farm in Gothenburg, Sweden.I will follow an incremental and iterative approach to development and make use of automated tests to drive my development process. As a lazy person, I want to write as little code as possible and do my best to avoid feature-creep. 
# Application structure

I'll be using [Vite](https://vitejs.dev/guide/) and following th guide.

Using Yarn: 

```
$ yarn create vite
```

I chose to use [SWC](https://swc.rs/) that claims to be much faster than Babel. 

Since I had an original folder named `gustegarden`, I had to move all files from the subfolder created by Vite to the root. 

```
$ mv gustegarden/* .
```

# Cleaning

I removed `App.css` and `index.css`. Also, I cleande up the `App.jsx` and `main.jsx` 

```js
//App.jsx
const App = () => {
  return (
    <div>Gustegården</div>
  )
}
export default App
```

```js
//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

# CSS Framwork: ChakraUI

I will be using [CahkraUI](https://chakra-ui.com/getting-started) for CSS. I start with a basic setup of the framework. 

Installation of dependencies:

```
$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

As the next step. I import the `ChakraProvider` to my `main.jsx`. At this point, I also chose to disable StrictMode. At least in development. 

```js
//main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  // </React.StrictMode>,
);
```
I will make use of a Chakra component (`<Heading>`) in my `App.jsx`: 


```js
//App.jsx
import { Heading } from "@chakra-ui/react"

const App = () => {
  return (
    <Heading>Gustegården</Heading>
  )
}

export default App
```
At this stage, I want to fire up the application and see if I'm on the right track... I should be okay. 

```
$ yarn dev
```

# First feature creep? 

I know that I eventually will need several views to disply all data related to the features I want to implement. When that happends, I will have to make use of React Router. I also like to keep as much data in application state, rather than keeping track of all state in individual components (unless it its really weird to use application state for something), so I will need Redux. Now, tha way I see it, I want to set up Redux, fairly fast (I consider it a part of the general set-up process), but hold off with React Router, until I start using it. Or at least, that is how I generally do. But perhaps I should consider routing as part of the set-up as well? 

Decisions have to be made, and I will go with setting up both of these libaries. 

# Application state

I will use [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) for my application state. 

```
$ yarn add @reduxjs/toolkit
```



