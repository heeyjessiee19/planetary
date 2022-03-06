import React from 'react';
import {db,auth} from '../firebase';
import { withRouter } from "react-router-dom";
import './Log.css';
import Alert from 'react-bootstrap/Alert';

const Log = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim() ){
            //console.log('Datos vacíos email!')
            setError('You havent entered an email!')
            return
        }
        if(!pass.trim()){
            //console.log('Datos vacíos pass!')
            setError('You havent entered a password!')
            return
        }
        if(pass.length < 6){
            //console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('Correct Data')
        setError(null)

        if(esRegistro){
          registrar()
        }

        if(!esRegistro){
          login()
      }
      }

      const login = React.useCallback(async() => {
        try {
            await auth.signInWithEmailAndPassword(email, pass)  
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/inicio') 
        } catch (error) {
            if(error.code === 'auth/user-not-found'){
                setError('Usuario o contraseña incorrecta')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
        }
    }, [email, pass, props.history])

      const registrar = React.useCallback(async() => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid
            })
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/inicio') 
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/email-already-in-use'){
                setError('Usuario ya registrado...')
                return
            }
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
                return
            }
        }
    }, [email, pass, props.history])

  return (

  <div className="containers">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">{esRegistro ? 'Register' : 'Login'}</h2>
    </div>
    <form className="form" onSubmit={procesarDatos}> 
    {
       error ? (
        <Alert variant='danger'>  
            {error}
        </Alert>
      ) : null
    }
      <input type="email" className="form-field animation a3" placeholder="Email Address"
      onChange={ e => setEmail(e.target.value)} value={email}/>
      <input type="password" className="form-field animation a4" placeholder="Password" onChange={ e => setPass(e.target.value) }
      value={pass}/>
      <button className="animation a6" type="submit">{esRegistro ? 'Register' : 'Log In'}</button>
      <button className="animation a7" type="button" onClick={() => setEsRegistro(!esRegistro)}>{esRegistro ? 'Already have an account?' : 'Dont have an account?'}</button>
    </form  >
  </div>
  <div className="right"></div>
</div>

          
  )
}

export default withRouter(Log)