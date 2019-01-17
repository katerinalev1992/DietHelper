import * as React from "react";
import './Product.css';
import ProductItem from "./ProductItem";

export interface IProps {
    opt?: string
    product: ProductItem;
    onRemoveProductClick: any;
}

interface IState {
    product: ProductItem;
}


class Product extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {product: this.props.product};
    }

    render() {
        return (
            <div className={"productBlock"}>
                <div className={"inlineRow"}>
                    <button onClick={this.onRemoveProduct.bind(this)} className={"removeProduct"}>x</button>

                    <table>
                        <tbody>
                        <tr>
                            <td className={"col1"}>Title:</td>
                            <td className={"col2"}>{this.state.product.title}</td>
                        </tr>
                        <tr>
                            <td className={"col1"}>Calories per 1 gram:</td>
                            <td className={"col2"}>{this.state.product.callory}</td>
                        </tr>
                        <tr>
                            <td className={"col1"}>Proteins per 1 gram:</td>
                            <td className={"col2"}>{this.state.product.b}</td>
                        </tr>
                        <tr>
                            <td className={"col1"}>Fats per 1 gram:</td>
                            <td className={"col2"}>{this.state.product.z}</td>
                        </tr>
                        <tr>
                            <td className={"col1"}>Hydrocarbons per 1 gram:</td>
                            <td className={"col2"}>{this.state.product.u}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    onRemoveProduct(){
        this.props.onRemoveProductClick(this.state.product)
    }
}

export default Product;
