import React from "react"
import Picture from "./Picture.jpg";

export default function Info(){
    return (
        <div className = "info-section">
                <img className="picture" src={Picture} alt="placeholderimg"/>
                <h2>Jordan Chung</h2>
                <h3>Frontend Developer</h3>
                {/* // <a href="https://github.com/hiimchung">Personalwebsite.com</a> */}
                <div className="buttons">
                    <button className="email-btn">
                        <i className="fa fa-envelope" aria-hidden="true"></i><h3>Email</h3>
                    </button>
                </div>
        </div>
    )
}