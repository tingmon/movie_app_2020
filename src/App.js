import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"; //component
import Home from "./routes/Home"; //component
import Navigation from "./components/Navigation"; //component
import Detail from "./routes/Detail"; //component

function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;

//<Food fav="kimchi" /> {/*give property 'fav' which has value 'kimchi' to 'Food' component*/}
//'.map' does specific funtion to all item in the array.
// passed parameter dish in '.map' is an object.