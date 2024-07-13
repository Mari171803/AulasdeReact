import Botao from "../../components/Botao"

const Principal = (props) =>{
    const mensagem = "deu certo!!!!" 

    return(
    <>
        <h1>Página Principal de {props.nome}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae repellendus culpa aut, praesentium pariatur rerum id quasi ab ipsum temporibus accusamus sapiente dolore quidem asperiores. Porro repellendus eius rerum neque?
        Neque alias quo rerum sit placeat laboriosam saepe eaque non similique sunt sint velit, laborum corrupti reiciendis ad eligendi doloremque deleniti dolor dolorum natus. Fugiat quae explicabo omnis cum ea?</p>
        <Botao msg={mensagem}/>

        <hr /> 

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deleniti, autem debitis facere fugiat, cum maiores consequuntur aperiam asperiores explicabo, voluptatibus dignissimos dolore quam facilis iste? Assumenda ad sapiente nobis.
        Explicabo consequatur ipsum laborum quidem asperiores corporis repellat et! Aut, beatae asperiores? Molestias magnam corporis, aut at repudiandae optio? Dolores, quidem provident. Asperiores labore distinctio dolore accusamus maiores. Repellat, illum.</p>  
        <Botao msg={mensagem}/>
    </>
    )
}

export default Principal