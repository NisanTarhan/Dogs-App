import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./components";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    {/* <Route path="/" exact component={Homepage} />
                    <Route path='/hakkinda' exact component={() => <div>Hakkimizda Componenti</div>} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/detail/:id" exact component={DetailDog} />
                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} /> */}

                    {
                        routes.map((route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />))
                    }
                </Switch>
            </div>
        );
    }
}

export default App;
