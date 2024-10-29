import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Maria'

  return (
    <>
      <HelloWorld />
      <SayMyName nome='Cristian' />
      <SayMyName nome='João' />
      <SayMyName nome={nome} />
      <Pessoa
        nome='Cristian'
        idade='29'
        profissao='Programador'
        foto='https://avatars.githubusercontent.com/u/141193350?v=4'
      />
    </>
  )
}

export default App
