import { useState } from "react";
import "./assets/app.css";

const App = () => {
   
  const [valorMostrado, novoValor] = useState("");

  const operador = "";
  const guardaValor = "";
  
  const calculaValor = (e) =>{
    novoValor(valorMostrado.concat(e.target.name));
  } 
    
  const resultado = () =>{
    try{
    novoValor(eval(valorMostrado).toString());
    } catch(e){
      novoValor("Erro");
    }
  } 

  const apagar = () => {
    novoValor(valorMostrado.slice(0, -1));
  }

  const limpar = () => {
    novoValor("");
  }

    return (
      <section className="container">
        <form className="calculadora-container">
          <input type="text" id="campo-calculo" value={valorMostrado}
            className="form-control calculadora-input"
            disabled="true" />
          <div className="section-botoes">
            <input name="0" value="0" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="1" value="1" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="2" value="2" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="3" value="3" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="4" value="4" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="5" value="5" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="6" value="6" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="7" value="7" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="8" value="8" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="9" value="9" onClick={calculaValor}
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="*" value="x" onClick={calculaValor} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="-" value="-" onClick={calculaValor} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="+" value="+" onClick={calculaValor} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="/" value="/" onClick={calculaValor} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input name="." value="." onClick={calculaValor} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input value="del" onClick={apagar} id="operator"
              className="botao-calculadora btn btn-outline-secondary" />
            <input value="limpar" onClick={limpar} id="limpar"
              className="botao-calculadora btn btn-outline-secondary" />
            <input value="=" onClick={resultado} id="igual"
              className="botao-calculadora btn btn-outline-secondary" />
          </div>
        </form>
      </section>
    )
  }


export default App;
