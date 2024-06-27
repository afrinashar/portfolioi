import React from 'react'
import './Services.css'
import Heartemoji from "../../img/ai.png";
import Card from '../Card/Card';
import Glasses from "../../img/react.png";
import Humble from "../../img/css.png";
//import Resume from "./Devanand022.pdf"
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration : 1, type: 'spring'}
    let Resume=""
  return (
    <div className="services" id='Services'>
        {/*left side */}
        <div className="awesome">
            <span style= {{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>As a seasoned MERN stack developer, I specialize in crafting robust web applications  <br/>that leverage MongoDB, Express.js, React.js, and Node.js.<br/> My services cater to diverse business needs, <br/> offering end-to-end solutions from conceptualization to deployment
            </span>
           <a href={Resume} download> <button className="button s-button">Download CV</button></a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">

            {/*first blur*/}

            <motion.div 
                initial = {{left: '25rem'}}
                whileInView = {{left: '14rem'}}
                transition = {transition}
                style={{left: '14rem'}}>
                <Card
                links={"design"}
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {"Expert in MERN stack development for robust web applications."}
                />
            </motion.div>

            {/*second blur*/}

            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                   links={"projects"}
                emoji = {Glasses}
                heading = {'Developing'}
                detail = {"Html, Css, Javascript, React, Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>

            {/*third blur*/}

            <motion.div 
            initial = {{left: '25rem'}}
            whileInView = {{left: '12rem'}}
            transition = {transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card
                   links={"projects"}
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Crafting intuitive, engaging user experiences with a focus on aesthetic and functionality."}
                />
            </motion.div>

            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services