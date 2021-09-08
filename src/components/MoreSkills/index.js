import React from 'react';
import './MoreSkills.css';
import { Button } from '../ButtonElement';
import {BtnWrap} from './MoreSkillsElements';
const MoreSkills = () => {
    return (
        <div className="main">
        <section class = "skills container">
      <div class = "title">
        
        
          <h2>My Skills</h2>
 
      </div>

      <p class = "text"><p>Skill is the unified force of experience, intellect and passion 
        in their operation.</p><br/><p style={{fontStyle:'italic', fontSize: 20}}>~John Ruskin</p>
</p>

      <div class = "row" style={{marginRight:32, marginLeft:32}}>
        <div class = "item">
          <div class = "item-text">
            <span>HTML5</span>
            <span class = "w-90" style={{right:0}}>85%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-90"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Public Speaking</span>
            <span class = "w-75" style={{right:0}}>90%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-75"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>CSS3</span>
            <span class = "w-85" style={{right:0}}>33%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-85"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Leadership</span>
            <span class = "w-80" style={{right:0}}>74%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-80"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Machine Learning</span>
            <span class = "w-60" style={{right:0}}>24%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-60"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Critical Thinking</span>
            <span class = "w-68" style={{right:0}}>82%</span>
          </div>
          <div class = "progress">
            <div class = "progress-bar w-68"></div>
          </div>
        </div>
      </div>
    </section>
    <BtnWrap>
     <Button to="/"
      smooth={true}
      duration={true}
      spy={true}
      exact="true"
      primary={1}
      dark={1}
      dark2={1}
      >Back Home</Button></BtnWrap>
    </div>
    )
}

export default MoreSkills;