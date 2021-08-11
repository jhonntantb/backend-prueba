

export default function NotFound (props) {
    

    function handleClick() {
        props.history.push('/')
    }
    return (
        <div className='not-found'>
            <img
                src='https://sabuss.com/404.png'
                alt='404 - No se encontró la Página solicitada'
            />
            {/* <Link to='/Home' style={{ textDecoration: 'none' }}> */}
            <button className='btn-1'
            onClick={handleClick}
            >Try Again!</button>
            {/* </Link> */}
            
        </div>
    )
}