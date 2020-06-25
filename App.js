import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Sistema de Rutas Basico</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
        <br />
        <br />
        <br />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Users} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

//TRES COMPONENTES DISTINTOS

function Home() {
  return <h2>Estamos en el componente Home</h2>;
}

function Contact() {
  return <h2>Componente Contact...</h2>;
}

function Users() {
  return <h2>estamos en el componente Users</h2>;
}

//COMPONENTE DE ERROR 404 , PARA CUANDO LA RUTA NO EXISTA

function Error404() {
  return <h2>Error404...</h2>;
}

export default App;
