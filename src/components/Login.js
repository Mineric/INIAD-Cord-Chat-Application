import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"
import logo from "../images/logo.svg"

export default function Login() {
   
  return (
    <div id='login-page'>
      <div id='login-card'>
        <img src={logo} alt="INIADCord Logo" style={{"height" : "50%", "width" : "25%"}}/>
        <h2></h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  )
}