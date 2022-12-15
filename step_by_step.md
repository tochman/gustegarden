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
$ yarn add @reduxjs/toolkit react-redux
```

Create a `src/state/store.js` file. I will make use of `configureStore` - a module that wraps createStore to provide simplified configuration options and defaults.

```js
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
});
```

Next step is to make it available to our React components by putting a React-Redux `<Provider>` around the application in `src/main.js`. This is what it looks now: 

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./state/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>,
);
```

This is the first visit to Redux set-up, and the only data I will be storing in application state for now, is tha application name/title: "Gustegården".

I will make use of `createSlice` module thast accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

I will create a subfolder to the `state` folder titles `application`, and create a file named `applicationSlice.js`. This might be a bit of an overkill, since I will not be making use of any actions at this pont (feature creep?!?), but my experience with the Toolkit is limited at this point, and I choose to take a short cut.

```js
//state/application.applicationSlice.js
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  title: 'GUSTEGÅRDEN',
}
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {}
})

export default applicationSlice.reducer
```

In the `store.js`, I nned to make use of the reducer (see the default export in the slice):

```js
//state/store.js
import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application/applicationSlice";
export const store = configureStore({
  reducer: { application: applicationReducer },
});
```

At this stage, I should be able to use the `useSelector` function from `react-redux` and subscribe to the `apllication.title` value: 

```js
//App.jsx
import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const App = () => {
  const { title } = useSelector((state) => state.application);
  return <Heading>{title}</Heading>;
};

export default App;
```
That allows me to display the application title, and later on, I I choose to do so, add some other meta data.

# React router

First, I install the package: 
```
$ yarn add react-router-dom
```
...and imort the `<BrowserRouter>` to my `main.js` wrapping the `<App>` component.

```js
//main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

window.store = store;
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>,
);
```

I will extract the UI that lives in `App.jsx` to a separate component that I will call `MainView` I want to group my components in a separate folder, so I go ahead and create a folder for that. 

```
$ mkdir src/components
$ touch src/components/MainView.jsx
```

The UI is basically a copy of what I had in `App.jsx`:

```js
import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const MainView = () => {
  const { title } = useSelector((state) => state.application);
  return <Heading>{title}</Heading>;
};

export default MainView;
```

Now, my `App.jsx` need to undergo some changes. I will remove all UI elements (for now) and set up the routing (with only one route):

```js
//App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainView from "./components/MainView";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainView />} />
    </Routes>
  );
};

export default App;
```

At this point, I'm back with the same view I had before, but making use of routing. 

# End of part 1
At this point, my setup of the application structure is pretty much done. There are a few other issues outstanding, but it will do for now.







