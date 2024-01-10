import Container from '@components/Container'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-gray-200'>
      <Container>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header