// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import { Contact } from './Components/Contact'
import { Error } from './Components/Error'
import Search from './Components/Search'
import { RestaurantMenu } from './Components/RestaurantMenu'
// import { Grocery } from './Components/Grocery'

const Grocery = lazy(()=>import('./Components/Grocery'))

const appRouter = createBrowserRouter([
  {

  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
      path: '/',
      element: <Search/>

    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>,

    },
    {
      path: '/restaurantmenu/:resid',
      element: <RestaurantMenu/>
    },
    {
      path: '/grocery',
      element:(<Suspense fallback={<h1>loading....</h1>}>
                  <Grocery/>
               </Suspense>)
    },
   

    
  
]
},


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
