import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Github from './Components/Github/Github.jsx'
import Error from './Components/Error/Error.jsx'
import GithubUser from './Components/GithubUser/GithubUser.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error />,
    children:[
      {
        path: "",
        element: <Home/>,
        errorElement: <Error />,
      },
      {
        path: "About/",
        element: <About/>,
        errorElement: <Error />,
      },
      {
        path: "Contacts/",
        element: <Contacts/>,
        errorElement: <Error />,
      },
      {
        path: "Github/",
        element: <Github username='avneets2103'/>,
        errorElement: <Error />,
      },
      {
        path: "Github/:username",
        element: <GithubUser/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
