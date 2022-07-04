import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LogedInNavbar from "./components/logedin"
import Home from "./components/Home"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Destination from "./components/Destination"
import Footer from "./components/Footer"
import Country from "./components/Country"
import Login from "./components/Login"
import SingUp from "./components/SingUp"


class App extends React.Component {

  renderCountries = (routerPropsCountry) => {
    let countryName = routerPropsCountry.match.params.name
    return (<Country country={countryName} />)
  }

  render() {
    return (
      <Router>
        <Route path="/" exact >
          <LogedInNavbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/blog" >
          <LogedInNavbar />
          <Blog />
          <Footer />
        </Route>
        <Route path="/contact" >
          <LogedInNavbar />
          <Contact />
          <Footer />
        </Route>
        <Route path="/destination" >
          <LogedInNavbar />
          <Destination />
          <Footer />
        </Route>
        <Route path="/user/register" component={SingUp} />
        <Route path="/user/login" component={Login} />
        <Route path="/country">
          <LogedInNavbar />
          <Route path="/country/:name" render = {routerPropsCountry => this.renderCountries(routerPropsCountry)} />
          <Footer />
        </Route>
      </Router>

    )
  }
 
}

export default App;
