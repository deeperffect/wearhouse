
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

// <section>
    //   <div className="wrapper-cards">
    //     <div className="container-cards">

    //       <input type="radio" name="slide" id="c1" />
    //       <label htmlFor="c1" className="single-card">
    //         <div className="row">
    //           <div className="icon">1</div>
    //           <div className="description">
    //             <h4>Buy</h4>
    //             <p>Discover your Style</p>
    //           </div>
    //         </div>
    //       </label>
        
    //       <input type="radio" name="slide" id="c2"/>
    //       <label htmlFor="c2" className="single-card">
    //         <div className="row">
    //           <div className="icon">2</div>
    //           <div className="description">
    //             <h4>Browse</h4>
    //             <p>Unlock your Style</p>
    //           </div>
    //         </div>
    //       </label>

    //       <input type="radio" name="slide" id="c3" />
    //       <label htmlFor="c3" className="single-card">
    //         <div className="row">
    //           <div className="icon">3</div>
    //           <div className="description">
    //             <h4>Sell</h4>
    //             <p>Share your Style</p>
    //           </div>
    //         </div>
    //       </label>

    //     </div>
    //   </div>
    // </section>