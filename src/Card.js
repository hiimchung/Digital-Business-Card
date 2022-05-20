import React from "react"
import Info from "./Components/Info"
import About from "./Components/About"
import Footer from "./Components/Footer"

export default function Card(){
    return (
        <div>
            <div className="container">
                <Info />
                <About />
            </div>
                <Footer/>
        </div>
            
    )
}