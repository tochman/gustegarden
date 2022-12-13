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
