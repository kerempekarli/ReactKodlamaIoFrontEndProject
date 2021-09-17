import React, { useState } from "react";
import { useHistory } from "react-router";
import {  Container, Menu } from "semantic-ui-react";
import Cartsummary from "./Cartsummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setisAuthenticated] = useState(true)
 const history = useHistory()  
  function handleSignOut(params){
    setisAuthenticated(false)
    history.push("/")
  }
  function handleSignIn(params){
    setisAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top" size="mini">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
           {cartItems.length>0&&<Cartsummary/>} 
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu> 
        </Container>
      </Menu>
    </div>
  );
}
