import './App.css';
import BaseRouter from './routes' ;
import {BrowserRouter as Router} from 'react-router-dom' ;



function App(props) {
  return (
    <div>
     
        <Router>
          <main {...props}>
            <BaseRouter/>
          </main>
      </Router>

    </div>
  );
}

export default App;
