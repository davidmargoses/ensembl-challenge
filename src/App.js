import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import MoviesSeries from './Containers/MoviesSeries';
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/data" component={MoviesSeries} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
