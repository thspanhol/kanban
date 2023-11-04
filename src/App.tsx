import { Container, Heading } from "@chakra-ui/react"

function App() {
  return (
    <>
    <Heading
    fontSize={{base: '4xl', sm: '5xl', md: '6xl'}}
    fontWeight='bold'
    textAlign='center'
    bgGradient='linear(to-l, #7928CA, #FF0080)' 
    bgClip='text'
    mt={4}
    >
      Welcome to DnD Kanban
    </Heading>
    <Container maxWidth='container.lg' px={4} py={10}>
      { /* Colunas aqui */ }
    </Container>
    </>
  )
}

export default App
