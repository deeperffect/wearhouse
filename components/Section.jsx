import Container from "./Container"

const Section = ({ children }) => {
  return (
    <section>
      <Container>
        { children }
      </Container>
    </section>
  )
}

export default Section