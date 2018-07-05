import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import DynamicImport from "./components/dynamic-import";
import Header from "../src/components/header";
import AboutPage from "./pages/about";
import { configureStore } from "./store/configureStore";

class App extends React.Component {
    private Home = (props) => (
        <DynamicImport load={() => import(/* webpackChunkName: "async-home" */"./pages/home")}
            componentToLoad={(Component) => Component === null
                ? <p>Loading</p>
                : <Component {...props} />}>
        </DynamicImport>
    );

    private About = (props) => (
        <DynamicImport load={() => import(/* webpackChunkName: "async-about" */"./pages/about")}
            componentToLoad={(Component) => Component === null
                ? <p>Loading</p>
                : <Component {...props} />} >
        </DynamicImport>
    );

    public render() {
        return (
            <div>
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={this.Home} />
                            <Route path="/about" component={this.About} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById("root")
);
