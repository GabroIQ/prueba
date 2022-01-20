import './Header.css'

const Header = ({MostrarMenu, menuNoVisible}) => {
    return(
        <header className="header">
            <i className='bx bx-menu' onClick={()=>MostrarMenu()}></i>
            <h1 className="header__title">cuid<span className="header__title__span">ar</span></h1>
            <i className='bx bxs-bell'></i>

            {menuNoVisible ?
                            <div className='header__menu'>
                            <i className='bx bx-x' onClick={()=>MostrarMenu()}></i>
                            <div className='header__menu__datos'>
                                <i className='bx bxs-user-circle' ></i>
                                <div>
                                    <h2>Carolina Yasmin <span>Lopez</span></h2>
                                    <h3>DNI: <span>40136351</span></h3>
                                </div>
                            </div>
                            <div className='header__menu__datos__hogar'>
                                <i className='bx bxs-phone'></i>
                                <div>
                                    <p className='header__menu__datos__title'>Telefono</p>
                                    <p>+541136693575</p>
                                </div>
            
                            </div>
                            <div className='header__menu__datos__hogar'>
                                <i className='bx bxs-home header__img'></i>
                                <div className='header__menu__datos__hogar__personales'>
                                    <p className='header__menu__datos__title'>Direccion actual</p>
                                    <p>Calle Galicia, Numero 1481</p>
                                    <p>Piso pb, Puerta 2</p>
                                    <p>CABALLITO, Ciudad Autonoma de</p>
                                    <p>Buenos Aires</p>
                                    <p className='header__menu__datos__hogar__personales__editar'>EDITAR INFORMACION</p>
                                </div> 
                            </div>
            
                            <div className='header__menu__datos__hogar'>
                                <i className='bx bx-log-in' ></i>
                                <p className='header__menu__datos__hogar__personales__editar'>CERRAR SESION</p>
                            </div>
            
                            <div className='header__menu__datos__hogar fondo__uno'>
                                <i className='bx bx-cross'></i>
                                <p>Vacuna COVID-19</p>
                            </div>
                        </div> : null        
            }

        </header>
    )
}


export default Header