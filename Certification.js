import React from 'react'
import c from "./img/c0.png"
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import c4 from "./img/c4.png"

const Certification = () => {
  return (
    <>Certification
   <div> <h1>Freecodecamp</h1>

   <img src={c} width={500}></img>
   <h3> Link</h3><a  href="https://www.freecodecamp.org/certification/fccb9a56c26-a3cd-42ca-a77c-6033bcecf072/front-end-development-libraries?trk=public_profile_see-credential" target="_blank">Front End</a>
</div>
    
<div> <h1>Hacker Rank</h1>
<h2>React js</h2> 
<img src={c3} width={500}></img>
<h3> Link</h3><a  href="https://www.hackerrank.com/certificates/73c568a86170" target="_blank">React JS</a>

<h2>Javascript</h2> 
<img src={c2} width={500} ></img>
<h3> Link</h3><a  href="https://www.hackerrank.com/certificates/40d2d60a0470" target="_blank">Javascript</a>
<h2>API</h2> 
<img src={c1} width={500}></img>
<h3> Link</h3><a  href="https://www.hackerrank.com/certificates/acf6f88d81d1" target="_blank">API</a>

<h2>Problem solving</h2> 
<img src={c4} width={500}></img>
<h3> Link</h3><a  href="https://www.hackerrank.com/certificates/7c4f9545c52c" target="_blank">Problem solving</a>

</div>
    </>
  )
}

export default Certification