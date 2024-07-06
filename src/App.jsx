import Header from './Header'
import TextoLong from './Textin'
import Botao from './Botao'

const App = () =>{
  const nome = 'Marya'
  const diasemana = 'Sábado'
  const n1 = 12
  const n2 = 6
  return(
    <div>
      <Header />
      <p><TextoLong /></p>
      <Botao />
    </div>
  )
}

export default App