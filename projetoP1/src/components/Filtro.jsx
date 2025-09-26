const Filtro = (props) => {
    return (
        <div className='d-flex justify-content-left my-2'>
            <button
                type="button"
                className="btn btn-primary"
                onClick={props.funcaoTodos}
            >
                <i className="fa-solid fa-filter"></i>
            </button>

            <button
                type="button"
                className="btn btn-warning"
                onClick={props.funcaoFavoritos}
            >
                <i className="fa-solid fa-star"></i>
            </button>
        </div>
    )
}

export default Filtro
