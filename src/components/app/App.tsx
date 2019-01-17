import * as React from 'react';
import './App.css';
import NavMenu from "../nav-menu/NavMenu";
import ContentPage from "../content-page/ContentPage";

interface IAppState {
    data: string[];
}

class App extends React.Component <{}, IAppState> {
    render() {
        return (
            <div className="App">
                <NavMenu/>
                <ContentPage/>
            </div>
        );
    }
}

export default App;
