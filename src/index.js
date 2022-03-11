import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom'
import './index.css';
import Sliders from './Slides';
import AccordionApp from './Accordion';
import Menu from './Menu';
import Home from './Home'
import Tabs from './Tabs'
import ParaGen from './lorem-ipsum-gen'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to='/slider'>Slider</Link>
        <Link to='/accordion'>Accordion</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/tabs'>Tabs</Link>
        <Link to='/paragen'>Para Gen</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/slider"><Sliders /></Route>
        <Route path='/accordion'><AccordionApp /></Route>
        <Route path='/menu'><Menu /></Route>
        <Route path='/tabs'><Tabs /></Route>
        <Route path='/paragen'><ParaGen /></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);