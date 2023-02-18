import React,{useState,useRef,useEffect} from "react";
import './index.css'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg'

const NavBar = ()=>{
    const [showLinks,setShowLinks] = useState(false);
    const linksRefContainer = useRef(null);
    const linksRef = useRef(null);


    const toggleLinks = ()=>{
        setShowLinks(!showLinks)
    }
    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;

        if(showLinks){
            linksRefContainer.current.style.height = `${linksHeight}px`
        }else{
            linksRefContainer.current.style.height = `0px`
        }

    },[showLinks])



    return(
        <nav>
            <div className="nav-center">
                  {/* first container for logo */}
                  <div className="nav-header">
                    <img src={logo} alt="logo" className="logo"/>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        {<FaBars/>}
                    </button>
                  </div>
                  <div className="links-container" ref={linksRefContainer}>
                    <ul className="links" ref={linksRef}>
                    {links.map((link)=>{
                        const {id,url,text} = link;
                        return(
                           <li key={id}>
                            <a href={url}>{text}</a>
                           </li> 
                        )
                    })}
                    </ul>
                  </div>
                  <div>
                    <ul className="social-icons">
                    {social.map((socialIcon)=>{
                        const{id,url,icon} = socialIcon;
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                    </ul>
                  </div>
            </div>
        </nav>
    )
}

export default NavBar