import React, { Component } from 'react'
import LembreteItem from './LembreteItem'

export class LembreteLista extends Component {

    render() {
        console.log(this.props.lista_lembretes);
        return (
            <div className="card pt-5 px-2">
                <div className="card-body">

                    {this.props.lista_lembretes && this.props.lista_lembretes.length !== 0 ?
                        this.props.lista_lembretes.map(lembrete => (
                            < LembreteItem
                                descricao={lembrete.descricao}
                                favoritado={lembrete.favoritado}
                            />
                        ))

                        :
                        <p className='text-center ms-3 fs-1'>Não há lembretes!</p>
                    }
                </div>
            </div>
        )
    }
}

export default LembreteLista