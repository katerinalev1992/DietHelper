import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './NavMenu.css';

export interface IProps {
    opt?: string
}

interface IState {
    opt?: string
}

class NavMenu extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul className={"Menu"}>
                    <li className={"MenuLi"}><NavLink to='/products'>Products</NavLink></li>
                    <li className={"MenuLi"}><NavLink to='/dishes'>Dishes</NavLink></li>
                    <li className={"MenuLi"}><NavLink to='/ingredients'>Ingredients</NavLink></li>
                    <li className={"MenuLi"}><NavLink to='/dailyMenu'>Daily menu</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default NavMenu;
