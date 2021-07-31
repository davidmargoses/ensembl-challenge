import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import MoviesSeries from './Containers/MoviesSeries';
import Header from './Components/Header';
import Footer from './Components/Footer';
const App = () => {
    return (
        <div className="main-container">
            <Router>
                <Header />
                <div className="data-container">
                    <Switch>
                        <Route path="/series" component={MoviesSeries} />
                        <Route path="/movies" component={MoviesSeries} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
