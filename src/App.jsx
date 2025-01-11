import React from 'react'
import Badge from './Components/Badge'
import data from './data'

function App() {
  const squareBadges = data.filter(badge => badge.type ==='square').map((badge, index) => (
    <Badge 
            key={index} 
            text={badge.text} 
            backgroundColor={badge.backgroundColor} 
            textColor={badge.textColor} 
            type="square" 
        />
  ))

  const pillBadges = data.filter(badge => badge.type ==='pill').map((badge, index) => (
    <Badge 
            key={index} 
            text={badge.text} 
            backgroundColor={badge.backgroundColor} 
            textColor={badge.textColor} 
            type="pill"
        />
  ))

  return (
    <>
    <header>BADGES</header>
    <div className="badge-container">
                <h2>Square</h2>
                <div>{squareBadges}</div>
                <h2>Pill</h2>
                <div>{pillBadges}</div>
            </div>
    </>
  )
}

export default App
