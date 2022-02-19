import React,{useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';



const Dashboard=()=> (<h2>Dashboard</h2>);
const SurveyNew=()=> (<h2>New Survey</h2>);

const App=(props)=>{
    useEffect(()=>{
            // async function fetchCurrentUser(){
            //     let response= await props.fetchUser();
            //     console.log("after fetch");
            //     console.log(response);
            // }
           props.fetchUser();
    },[props])
    return(
        <div className='container'>
           <BrowserRouter>
           <div>
               <Header/>
               <Route exact path="/" component={Landing} />
               <Route exact path="/surveys" component={Dashboard}/>
               <Route path="/surveys/new" component={SurveyNew}/>
               
           </div>
           </BrowserRouter>
        </div>
    )
}

export default connect(null,actions) (App);