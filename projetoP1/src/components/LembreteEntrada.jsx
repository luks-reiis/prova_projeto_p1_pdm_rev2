import React, { Component } from 'react'
export class LembreteEntrada extends Component {
    state = {
        texto: ""
    }

    enviar_descricao_lembrete = () => {
        const texto_tratado = this.state.texto.trim();
        if (!texto_tratado) {
            return
        }

        this.props.novo_lembrete(texto_tratado);
        this.setState({
            texto: ""
        })
    }


    render() {
        return (
            <div className='mt-5'>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu novo lembrete"
                        value={this.state.texto}
                        onChange={(e) => this.setState({
                            texto: e.target.value
                        })}
                    />
                </div>
                <div>
                    <button
                        onClick={this.enviar_descricao_lembrete}
                        className="mb-5 btn btn-primary w-100"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        )
    }
}

export default LembreteEntrada