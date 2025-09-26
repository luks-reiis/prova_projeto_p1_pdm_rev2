import React, { Component } from 'react'

export class LembreteItem extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between align-items-center border rounded mb-5 px-5' style={{ height: '6rem' }}>
                <p className='w-75 text-center ms-3 fs-1'>{this.props.descricao}</p>
                <div>
                    <i className={`fa-${this.props.favoritado ? "solid" : "regular"} fa-star fa-3x me-2`}></i>
                    <i className="fa-solid fa-trash fa-3x"></i>
                </div>
            </div>
        )
    }
}

export default LembreteItem