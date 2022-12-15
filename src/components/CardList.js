import React from 'react'
import Card from './Card.js'
import '../styles/CardList.css'

const getCard = (project) => {
    return <Card {...project} key={project.cardNum} />
}

const getCards = (projects) => {
    return projects.map(getCard)
}

export default function CardList(props) {
  return (
    <div className='projects-container'>
        {getCards(props.projects)}
    </div>
  )
}