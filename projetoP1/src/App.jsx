import React from "react"
import LembreteEntrada from "./components/LembreteEntrada";
import LembreteLista from "./components/LembreteLista";
class App extends React.Component {
  state = {
    lista_lembretes: []
  }

  adicionar_lembrete = (texto) => {
    const lembrete = {
      descricao: texto,
      favoritado: false
    }

    this.state.lista_lembretes.push(lembrete);
    this.setState({
      lista_lembretes: this.state.lista_lembretes
    });
  }
  render() {
    console.log(this.state.lista_lembretes)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <LembreteLista lista_lembretes={this.state.lista_lembretes} />
            <LembreteEntrada novo_lembrete={this.adicionar_lembrete} />
          </div>
        </div>
      </div>
    )
  }
}

export default App