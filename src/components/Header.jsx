import React from 'react';

const Header = (props) => {
  return (
    <><h1>RESUME</h1>
    <div>Name : {props.name}</div>
    <div>Email : {props.email}</div>
    <div>Contact : {props.contact}</div></>   
  );
};

export default Header;
