import Dados from "./components/Dados"
import Principal from "./pages/Principal"

const App = () =>{
  const nome = "Maria"
  const profissao = "Estudante"
  const idade = 17

  return(
    <>
      <Principal nome={nome}/>
      <Dados n={nome} i={idade} p={profissao}/>
    </>
  )
}

export default App