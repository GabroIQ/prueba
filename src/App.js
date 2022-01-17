import './index.css'
import Header from './Components/Header';
import Main from './Components/Main';
import { useState } from 'react';


const App = () => {
  const [visible , setVisible] = useState(true)
  const [menuNoVisible , setMenuNoVisible] = useState(false)

  
  const [noVisibleSalud , setNoVisibleSalud] = useState(false)
  const [noVisibleCertificado , setNoVisibleCertificado] = useState(false)
  const [noVisibleVacaciones, setNoVisibleVacaciones] = useState(false)

  const InformacionSalud = () => {
    return setNoVisibleSalud(!noVisibleSalud) , setVisible(!visible)
  }

  const InformacionCertificado = () => {
    return setNoVisibleCertificado(!noVisibleCertificado) , setVisible(!visible)
  }

  const InformacionVacaciones = ()=>{
    return setNoVisibleVacaciones(!noVisibleVacaciones) , setVisible(!visible)
  }

  const MostrarMenu = () => {
    return setMenuNoVisible(!menuNoVisible)
  }
  

  return(
    <div className='contendor__principal'>
      <Header
        MostrarMenu={MostrarMenu}
        menuNoVisible={menuNoVisible}

      />
      <Main
        visible={visible}
        noVisibleSalud={noVisibleSalud}
        InformacionSalud={InformacionSalud}
        noVisibleCertificado={noVisibleCertificado}
        InformacionCertificado={InformacionCertificado}
        InformacionVacaciones={InformacionVacaciones}
        noVisibleVacaciones={noVisibleVacaciones}
      />    
    </div>
    
  )
}

export default App;
