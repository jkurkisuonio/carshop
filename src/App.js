import React from 'react';
import Carlist from './components/Carlist';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
         
           
          <Typography variant="h6" >
            Carshop
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
