import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


import App from "./App.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

const AppLayout = () =>{
    return(
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}


const routes = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<App />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ]
    },
    
    
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);