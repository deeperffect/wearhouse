
'use client'

import { useEffect, useState } from 'react';
import HomeCard from '../HomeCard/HomeCard'
import './HomeCards.css'
import { HOME_CARDS } from '@constants/homeCards'
const HomeCards = () => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);

  const handleHover = (hover) => {
    setHover(hover)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(!hover) setActive(active === HOME_CARDS.length - 1 ? 0 : active + 1)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [active])

  return (
    <div className='cards-drawer' onMouseEnter={() => {handleHover(true)}} onMouseLeave={() => {handleHover(false)}}>
        {HOME_CARDS.map((card, index) => {
          return (
            <div key={card.id} className={`card-drawer-item ${active === index && 'active' }`}>
              <HomeCard setActive={setActive} card={card} index={index} />
            </div>
            )
        })}
    </div>
  )
}

export default HomeCards
