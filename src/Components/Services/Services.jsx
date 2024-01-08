import React from 'react'
import './Services.css'
import Heartemoji from "../../img/heartemoji.png";
import Card from '../Card/Card';
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Devanand022.pdf"
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration : 1, type: 'spring'}
  return (
    <div className="services" id='Services'>
        {/*left side */}
        <div className="awesome">
            <span style= {{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor amet adipisicing elit. Illum rerum quia uibusdam minima
                <br/>
                error enim amet hic, ealias laboriosam! Beatae, excepturi.
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
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>

            {/*second blur*/}

            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
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
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Lorem, ipsum dolor amet adipisicing elit. Illum rerum quia uibusdam minima"}
                />
            </motion.div>

            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services