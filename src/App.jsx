import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import NavbarI from './components/NavbarI';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';
import Log from './components/Log';
import NavbarP from './components/NavbarP';
import NavbarLog from './components/NavbarLog';
import Inicio from './components/Inicio';
import {auth } from './firebase';
import FondoP from './components/FondoP';



function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
}, [])

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavbarP firebaseUser={firebaseUser}/>
          <FondoP />
        </Route>
        <Route path="/mercury" exact>
          <NavbarI />
          <Mercury />
        </Route>
        <Route path="/venus" exact>
          <NavbarI />
          <Venus/>
        </Route>
        <Route path="/earth" exact>
          <NavbarI />
          <Earth />
        </Route>
        <Route path="/mars" exact>
          <NavbarI />
          <Mars />
        </Route>
        <Route path="/jupiter" exact>
          <NavbarI />
          <Jupiter />
        </Route>
        <Route path="/saturn" exact>
          <NavbarI />
          <Saturn />
        </Route>
        <Route path="/uranus" exact>
          <NavbarI />
          <Uranus />
        </Route>
        <Route path="/neptune" exact>
          <NavbarI />
          <Neptune />
        </Route>
        <Route path="/log" exact>
          <NavbarLog />
          <Log />
        </Route>
        <Route path="/Inicio" exact>
          <NavbarI />
          <Inicio />
        </Route>
      </Switch>
    </Router>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
