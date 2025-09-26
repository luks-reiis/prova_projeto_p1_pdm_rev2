import React from "react"
import LembreteEntrada from "./components/LembreteEntrada";
import LembreteLista from "./components/LembreteLista";
import Filtro from "./components/Filtro";
class App extends React.Component {
  state = {
    lista_lembretes: [],
    filtroAtivo: 'todos'
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

  remover_lembrete = (descricao) => {
    this.setState({
      lista_lembretes: this.state.lista_lembretes.filter(
        (lembrete) => lembrete.descricao !== descricao
      )
    });
  }

  alternar_favorito = (descricao) => {
    const novaLista = [];
    this.state.lista_lembretes.map(lembrete => {
      if (lembrete.descricao === descricao) {
        novaLista.push({
          descricao: lembrete.descricao,
          favoritado: !lembrete.favoritado
        });
      } else {
        novaLista.push(lembrete);
      }
    });
    this.setState({
      lista_lembretes: novaLista
    });
  }

  mudar_filtro = (filtro) => {
    this.setState({ filtroAtivo: filtro });
  }

  render() {
    const lembretesFiltrados = this.state.filtroAtivo === 'favoritos'
      ? this.state.lista_lembretes.filter(lembrete => lembrete.favoritado)
      : this.state.lista_lembretes;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <Filtro
              funcaoTodos={() => this.mudar_filtro("todos")}
              funcaoFavoritos={() => this.mudar_filtro("favoritos")}
            />
            <LembreteLista
              lista_lembretes={lembretesFiltrados} remover_lembrete={this.remover_lembrete}
              alternar_favorito={this.alternar_favorito}
            />
            <LembreteEntrada novo_lembrete={this.adicionar_lembrete} />
          </div>
        </div>
      </div>
    )
  }
}

export default App