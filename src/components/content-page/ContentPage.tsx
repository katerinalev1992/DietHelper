import * as React from "react";
import {Route, Switch} from "react-router-dom";
import './ContentPage.css';
import Products from "../products/Products";

export interface IProps {
    opt?: string
}

interface IState {
    opt?: string
}


class ContentPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

public render() {
        return (
            <Switch>
                <Route exact={true} path="/products" component={Products}/>
                {/*<Route exact={true} path="/learn" component={Dishes}/>*/}
                {/*<Route exact={true} path="/about" component={Ingredients}/>*/}
            </Switch>
        );
    }
}

export default ContentPage;
