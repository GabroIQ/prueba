import './Main.css'

const Main = ({InformacionSalud , visible , noVisibleSalud , InformacionCertificado , noVisibleCertificado , InformacionVacaciones , noVisibleVacaciones}) => {
    return(
        
    
        <div className='contenedor__main'>
            {noVisibleSalud ?
                            <div>
                                <i className='bx bx-left-arrow-alt' onClick={()=>InformacionSalud()} ></i>
                                <div className='contenedor__main__informacion__de__salud'>
                                    <h1>i</h1>
                                    <h2>Información de salud</h2>
                                    <p>Es necesario que sigamos cuidándonos y respetando las medidas y recomendaciones sanitarias</p>
                                </div>  
                
                                <div className='contenedor__main__informacion__de__salud__datos'>
                                    <h2>Carolina Yasmin Lopez</h2>
                                    <p>DNI: 40136351</p>
                                </div>
                            
                                <div className='contenedor__main__informacion__de__salud__estado__vacunacion'>
                                    <h3>Vacunacion de COVID-19 Argentina</h3>
                                    <h2>Vacunación Completa</h2>
                                    <p>Fecha de última dosis: 27/08/2021</p>
                                </div>
                                
                                <div className='contenedor__main__informacion__de__salud__diagnostico__covi'>
                                    <h3>Diagnóstico COVID-19</h3>
                                    <h2>Sin test registrado en las ultimas 48hs</h2>
                                </div>
                        </div> : null
            }


            {noVisibleCertificado ?
                <div className='contenedor__main__certificado___circulacion'>
                    <i className='bx bx-left-arrow-alt' onClick={()=>InformacionCertificado()} ></i>
                    <section className='contenedor__main__certificado___circulacion__slogan'>
                        <div className='contenedor__main__certificado__circulacion__img'>
                            <i className='bx bx-home' ></i>
                            <i className='bx bx-walk' ></i>
                        </div>
                        <h2>Certificado de Circulación habilitado</h2>
                    </section>

                    <section className='contenedor__main__certificado__circulacion__datos'>
                            <h3>Carolina Yasmin Lopez</h3>
                            <h3>DNI: 40136351</h3>
                            <h3>SUBE: ...21425669</h3>
                            <p>Recorda siempre las medidas sanitarias.</p>
                    </section>

                    <section className='contenedor__main__certificado__circulacion__datos'>
                            <div className='datos__transporte'>
                                <div>
                                    <h3>Certificado Unico de circulación</h3>
                                    <h2 className='datos__transporte__habilitado'>Habilitado</h2>
                                    <h2 className='datos__transporte__esencial '>ESENCIAL- Transporte</h2>
                                    <h2 className='datos__transporte__esencial '>publico: SI</h2>
                                    <p className='datos__transporte__esencial '>MAS INFORMACIÓN</p>
                                </div>
                                <img src='./img/qr.png'/>
                            </div>
                    </section>

                    <section className='contenedor__main__certificado__circulacion__datos diagnostico'>
                            <div className='datos__transporte__diagnostico'>
                                <div>
                                    <h3>Autodiagnostico</h3>
                                    <h2 className='datos__transporte__habilitado'>Sin sintomas</h2>
                                    <p>Vence 25/01/2022</p>
                                    <p className='datos__transporte__esencial '>MAS INFORMACION</p>
                                </div>
                                <div className='token__seguridad'>
                                    <h2>650</h2>
                                    <p>Token se seguridad</p>
                                </div>
                            </div>
                    </section>
                    <button className='btn'>HACER OTRO AUTODIAGNOSTICO</button>
            </div>
            : null
            }

            {noVisibleVacaciones ?
                <div>
                <i className='bx bx-left-arrow-alt' onClick={()=>InformacionVacaciones()} ></i>
                <section className='contenedor__main__certificado__vacaciones'>
                    <div className='contenedor__main__certificado__vacaciones__permiso'>
                        <i className='bx bx-sun vacaciones__destino__img' ></i>
                        <h2>Podes salir de vaciones</h2>
                    </div>
                    <div className='contenedor__main__certificado__vacaciones__permiso__destino'>
                        <h2>Villa Gesell, Buenos Aires</h2>
                        <p>Del 20/01/2022 al 25/01/2022 </p>
                    </div>
                </section>
                <section className='contenedor__main__certificado__circulacion__datos'>
                            <h3>Carolina Yasmin Lopez</h3>
                            <h3>DNI: 40136351</h3>
                            <h3>SUBE: ...21425669</h3>
                            <p>Recorda siempre las medidas sanitarias.</p>
                </section>
                <section className='contenedor__main__certificado__circulacion__datos'>
                            <div className='datos__transporte'>
                                <div>
                                    <h3>Certificado de turismo</h3>
                                    <h2 className='datos__transporte__habilitado'>Habilitado</h2>
                                    <h2 className='datos__transporte__esencial '>INDIVIDUAL</h2>
                                    <p className='datos__transporte__esencial '>MAS INFORMACION</p>
                                </div>
                                <img src='./img/qr.png'/>
                            </div>
                </section>
                <section className='contenedor__main__certificado__circulacion__datos diagnostico'>
                            <div className='datos__transporte__diagnostico'>
                                <div>
                                    <h3>Autodiagnostico</h3>
                                    <h2 className='datos__transporte__habilitado'>Sin sintomas</h2>
                                    <p>Vence 25/01/2022</p>
                                    <p className='datos__transporte__esencial '>MAS INFORMACION</p>
                                </div>
                                <div className='token__seguridad'>
                                    <h2>CE2</h2>
                                    <p>Token se seguridad</p>
                                </div>
                            </div>
                </section>
                <button className='btn'>HACER OTRO AUTODIAGNOSTICO</button>
            </div> : null
    
            }
            

            {visible ? 
                <section onClick={()=>InformacionSalud()} className='contenedor__main__section'>
                    <i className='bx bxs-home'></i>
                    <div>
                        <h3 className='contenedor__main__section__title'>Informacion de Salud</h3>
                        <p>Consulta la informacion provista por el Ministerio de Salud</p>
                    </div>
            </section> : null}

            {visible ? 
                <section className='contenedor__main__section sec__dos' onClick={()=>InformacionCertificado()}>
                    <i className='bx bx-list-check'></i>
                    <div>
                        <h3 className='contenedor__main__section__title'>Certificados de Circulacion</h3>
                        <p>Accede a tus certificados vigentes</p>
                    </div>
            </section> : null}

            {visible ? 
                    <section className='contenedor__main__section sec__tres' onClick={()=>InformacionVacaciones()}>
                        <i className='bx bx-sun' ></i>
                        <div>
                            <h3 className='contenedor__main__section__title'>Certificado de Turismo</h3>
                            <p>Disfrutemos de los viajes por el pais y cuidemosnos entre todos del COVID-19</p>
                        </div>
            </section> : null}

            
        </div>
    )
}



export default Main