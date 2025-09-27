import React, { useState } from 'react'
import "./header.css"
import logo from "../../src/images/favicon.png"
const Header = () => {

const navlink = [
{
url: "/",
text: "Home",
},
{
url: "/about",
text: "About",
},
{
url: "/services",
text: "Services",
},
{
url: "/portfolio",
text: "Portfolio",
},
{
url: "/testimonials",
text: "Testimonials",
},
{
url: "/Communication",
text: "Communication",
},
]

const [isOpen, setIsOpen] = useState(false);
return (
<nav className="nav">
    <img src={logo} alt='...' className='logo'/>
    <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {navlink.map((li ,index)=>(
        <li key={index}>
  <a href={`#${li.text}`}>{li.text}</a>
</li>
        ))}
    </ul>
    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
    ☰
    </div>
</nav>
);
}

export default Header