import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/leets.png';
import geeks from '../../img/geeks.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/me.png'
import Thumbup from '../../img/creative.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/node.png';
import react from '../../img/react.png';
import js from '../../img//js.png';
import db from '../../img/db.png';
import html from '../../img/html.png';
import css from '../../img/css.png';
import html5 from '../../img/html5.png';
import ci from '../../img/ci.png';
import next from '../../img/next.png';
import agil from '../../img/agils.png';
import bs from '../../img/bs.png';
import api from '../../img/api.png';
import arith from '../../img/arith.png';
import css3 from '../../img/css3.png';
import git from '../../img/git.png';
import jest from '../../img/jest.png';
import jwt from '../../img/jwts.png';
import ts from '../../img/ts.png';
import tan from '../../img/tan.png';
import tail from '../../img/tail.png';
import vs from '../../img/vs.png';

 



import npm from '../../img/npm.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style= {{color: darkMode? 'white': ''}}>Hi I Am</span>
                    <span>Afrin Ashar</span>
                    <span>I am a  Full Stack  Developer with high level experience in 
                        web designing at React js,JavaScript, Node js and three js.</span>
                </div>
                <button className=" button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                  <img src={LinkedIn} alt="" />  
                    <img src={Instagram} alt="" />
                    <img src={geeks} alt="" />
                </div>
            </div>
            <div className="i-right">
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img  width={240}src={Boy} alt="" />
                    <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '24%', top:'69%'}}
                    transition = {transition}
                    src={Glassesimoji} alt="" />



<motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '22%', top:'2%'}}
                    transition = {transition}
                    src={ci} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '14%', top:'9%'}}
                    transition = {transition}
                    src={arith} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '4%', top:'19%'}}
                    transition = {transition}
                    src={jest} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '14%', top:'59%'}}
                    transition = {transition}
                    src={git} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '10%', top:'49%'}}
                    transition = {transition}
                    src={html} alt="" />
 <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '-6%', top:'64%'}}
                    transition = {transition}
                    src={jwt} alt="" /> <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '2%', top:'36%'}}
                    transition = {transition}
                    src={css} alt="" /> <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '50%', top:'40%'}}
                    transition = {transition}
                    src={next} alt="" /> <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '34%', top:'31%'}}
                    transition = {transition}
                    src={agil} alt="" /> <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '22%', top:'70%'}}
                    transition = {transition}
                    src={bs} alt="" />
 <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '12%', top:'29%'}}
                    transition = {transition}
                    src={api} alt="" />






                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '64%', top:'39%'}}
                    transition = {transition}
                    src={css} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '24%', top:'29%'}}
                    transition = {transition}
                    src={react} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'49%' }}
                    whileInView = {{left: '64%', top:'19%'}}
                    transition = {transition}
                    src={db} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '64%', top:'93%'}}
                    transition = {transition}
                    src={js} alt="" />
                   
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '60%', top:'69%'}}
                    transition = {transition}
                    src={npm} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '60%', top:'69%'}}
                    transition = {transition}
                    src={ts} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '80%', top:'29%'}}
                    transition = {transition}
                    src={tan} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '80%', top:'49%'}}
                    transition = {transition}
                    src={tail} alt="" />
                     <motion.img 
                    className='imgs'
                    initial = {{left: '50%',top:'59%' }}
                    whileInView = {{left: '80%', top:'69%'}}
                    transition = {transition}
                    src={vs} alt="" />
                    <motion.div 
                   className='imgs'
                   initial = {{top: '-4', left: '74%'}}
                   whileInView = {{left: '68%'}}
                   transition = {transition}
                    style={{top: '-4%', left: '68%'}} className='floating-div'>                        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                    </motion.div>
                    <motion.div 
                    initial = {{left: '9rem', top: '18rem'}}
                    whileInView = {{left: '0rem'}}
                    transition = {transition}
                    style={{top: '18rem', left: '0rem'}} className='floating-div'>
                        <FloatingDiv image={Thumbup} txt1='Ideator'  />
                    </motion.div>
                    {/*blur divs*/}
                    <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                    <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro