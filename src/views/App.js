import React from 'react';
import Home from './home';
import { Switch, Route } from 'react-router-dom';
import About from './about';

const App = () => (
    <Switch>
        <Route expact path="/" exact component={Home} />
        <Route expact path="/about" component={About} />
        <Route render={() => <div>404</div>} />
    </Switch>
);

export default App;
