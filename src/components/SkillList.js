import React from 'react'
import Skill from './Skill.js'
import '../styles/SkillList.css'

const getSkill = (skill) => {
    return <Skill {...skill} key={skill.skillNum} />
}

const getSkills = (skills) => {
    return skills.map(getSkill)
}

export default function SkillList(props) {
  return (
    <div className='skills-container'>
        {getSkills(props.skills)}
    </div>
  )
}