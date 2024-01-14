import Link from 'next/link'
import './HomeCard.css'
import { useContext } from 'react'
import { AuthContext } from '@app/contexts/AuthContext'
const HomeCard = ({card, index, setActive}) => {
  const { user } = useContext(AuthContext)
  return (
    <div onClick={() => {setActive(index)}} className="card-home">
      <figure>
        <img src={card.image} alt={`card${index+1}`} />
      </figure>
      <Link href={card.link}>
        <div className="card-inner">
          <span className='card-circle'>{index+1}</span>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard