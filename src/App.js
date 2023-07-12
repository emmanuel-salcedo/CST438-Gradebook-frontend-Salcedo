import './App.css';
<<<<<<< HEAD
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
=======
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import NewAssignment from './components/NewAssignment';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
>>>>>>> dev

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route path='/gradebook' component={Gradebook} />
<<<<<<< HEAD
=======
        <Route path='/newassignment' component={NewAssignment} />
>>>>>>> dev
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
