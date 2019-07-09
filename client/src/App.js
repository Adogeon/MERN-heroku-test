import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Books />
        <Switch>
          <Route exact path ="/" component ={Books}/>
          <Redirect exact from = "/books" to = "/"/>
          <Route path ="/books/:id" component = {Detail}/>
          <Route component ={NoMatch}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
