import React from 'react';
import Home from './home';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import About1 from './about1';
import About2 from './about2';

const App = () => (
    <Switch>
        <Route expact path="/" exact component={Home} />
        <Route expact path="/22-12-2020-002" component={About} />
        <Route expact path="/23-12-2020-021" component={About1} />
        <Route expact path="/24-12-2020-053" component={About2} />
        <Route render={() => <div>404</div>} />
    </Switch>
);

export default App;
