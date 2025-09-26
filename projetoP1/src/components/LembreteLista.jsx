import React, { Component } from 'react'

export class LembreteLista extends Component {
    render() {
        return (
            <div className="card pt-5 px-2">
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center border rounded mb-5 px-5' style={{ height: '6rem' }}>
                        <p className='w-75 text-center ms-3 fs-1'>Preparar aula de programação</p>
                        <div>
                            <i className="fa-solid fa-star fa-3x me-2"></i>
                            <i className="fa-solid fa-trash fa-3x"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border rounded mb-5 px-5' style={{ height: '6rem' }}>
                        <p className='w-75 text-center ms-3 fs-1'>Fazer feira</p>
                        <div>
                            <i className="fa-regular fa-star fa-3x me-2"></i>
                            <i className="fa-solid fa-trash fa-3x"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border rounded mb-5 px-5' style={{ height: '6rem' }}>
                        <p className='w-75 text-center ms-3 fs-1'>Preparar marmitas</p>
                        <div>
                            <i className="fa-regular fa-star fa-3x me-2"></i>
                            <i className="fa-solid fa-trash fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LembreteLista