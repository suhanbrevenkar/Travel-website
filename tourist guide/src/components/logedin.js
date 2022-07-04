import React from 'react'
import {Auth} from './Auth.js'
import Navbar from "./Navbar"

export default function logedInNavbar () {
    
    if (Auth.userLoged) {
      return <Navbar user = {Auth.userName} />;
    }
    return <Navbar user = {"Login"} />;
  }