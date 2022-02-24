import React,{useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header=(props)=>{
  const renderContent=()=>{
    if(props.auth === null){
      return;
    }else if (props.auth === false){
      return  <li><a href="/auth/google">Login With Google</a></li>
    }else{
      return[
      <li key={1}><Payments/></li>,
      <li key={3} style={{margin:'0px 10px'}}>Credits: {props.auth.credits}</li>,
       <li key={2}><a href="/api/logout">Logout</a></li>
       ]
    }
  }
    return (
       <nav>
    <div className="nav-wrapper">
      <Link  to={props.auth ? "/surveys" : "/"}
      className="brand-logo"
      >
      Emaily
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
       {renderContent()}
      </ul>
    </div>
  </nav>
    )
}
function mapStateToProps({auth}){
return {auth};
}
export default connect (mapStateToProps)(Header);