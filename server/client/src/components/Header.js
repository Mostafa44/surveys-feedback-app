import React,{useState} from 'react';
import {connect} from 'react-redux';
const Header=(props)=>{
  const renderContent=()=>{
    if(props.auth === null){
      return;
    }else if (props.auth === false){
      return  <li><a href="/auth/google">Login With Google</a></li>
    }else{
      return <li><a href="/api/logout">Logout</a></li>
    }
  }
    return (
       <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Emaily</a>
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