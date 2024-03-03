import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"


import Main from './screens/main';
import NewEmployee from './screens/NewEmployee';
import CurrentEmployees from './screens/CurrentEmployees';
import Edit from './screens/Edit';

function App() {
  return (
 
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path="/newemployee" element={<NewEmployee/>}/>
          <Route exact path='/currentemployees' element={<CurrentEmployees/>}/>
          <Route exact path="/edit/:id/:name/:email/:contact/:manager/:profile" element={<Edit/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
