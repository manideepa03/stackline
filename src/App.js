import React, {useState,useEffect} from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import {listOfNumbers} from './selectors'

import { makeStyles } from '@material-ui/core/styles'
import {useSelector,useDispatch} from 'react-redux'
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import TableForm from "./components/TableForm"

const useStyles = makeStyles({
  table: {
    minwidth: 600,
    overflow: "hidden",
    position:'absolute',
    marginLeft:'300px'
  },
  draw: {
    paddingTop:'30px',
  }
});

function App() {

  const employeeList = useSelector(listOfNumbers)
  const dispatch = useDispatch()
  useEffect(()=>{
    const ondata = fetch(
      'https://manideepa03.github.io/stacklinedata/data/stackline_frontend_assessment_data_2021.json')
      .then(res => res.json())
      .then(data => {
        dispatch({type:"GOT_DATA", payload:data})

        console.log(data)
      })
      .catch(err => console.error(err))
     
  },[])
  
  const classes2 = useStyles()
    console.log(employeeList)
  return (
    <div className="App">
      <div>
        <span>
      <Header/>
      </span>
      </div>
      <div className={classes2.draw}>
        <span>
      <SideBar />
      </span>
      </div>
      <div>
        <span>
        <TableForm />
        </span>
      </div>
      
      </div>
        
      
   
  );
}

export default App
