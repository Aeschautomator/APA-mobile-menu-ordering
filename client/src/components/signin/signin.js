import React from "react";

function signin() {
  return (
    <a className="navbar navbar-expand-lg navbar-dark bg-primary"></a>
      <a className="navbar-brand" href="/">
        EATZ POS System
      </a>
      
      <form id="signup" name="signup" method="post" action="/signup">
        <label for="email">Email Address</label>
        <input class="text" name="email" type="email" />
        <label for="firstname">Firstname</label>
        <input name="firstname" type="text" />
        <label for="lastname">Lastname</label>
        <input name="lastname" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input class="btn" type="submit" value="Sign Up" />
     </form>
    );
}

export default signin;