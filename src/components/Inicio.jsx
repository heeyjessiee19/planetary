import React from 'react'
import { withRouter } from "react-router-dom";
import {auth} from '../firebase'

const Inicio = (props) => {

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/log')
        }
    }, [props.history])
  return (
    <div className='container'>
        <div className="mt-5">
            <h3 className="text-center">Ruta protegida
            {
                user && (
                    <p>{user.email}</p>
                )
            }</h3>
            
        </div>
    </div>
  )
}

export default withRouter(Inicio)

/**/