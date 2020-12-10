import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from "react-bootstrap";

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
        </Container>
      </main>
    </Router>
  );
}
export default App
