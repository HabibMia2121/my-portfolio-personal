import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import myCreateRouter from './router/Router'
import 'aos/dist/aos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter} />
  </React.StrictMode>,
)
