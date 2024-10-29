import './App.css'
import Perfil from './components/Perfil'
// import Nomes from './components/Nomes'

function App() {

  const name = "Ana Carolina"

  return (
    <>
      {/* <Nomes name="Denni"/>
      <Nomes name="Ana Carolina"/>
      <Nomes name="Daiane"/>
      <Nomes name="Gabriela"/>
      <Nomes name="Junior"/> */}
      <Perfil name={name} idade="29 anos" pais="Brasil" />
      <Perfil name="Felipe" idade="31 anos" pais="Brasil" />

    </>
  )
}

export default App
