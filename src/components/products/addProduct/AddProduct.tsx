import * as React from "react";
import './AddProduct.css';
import ProductItem from "../product/ProductItem";
import ProductRESTClient from "../../../util/restClient/ProductRESTClient";

export interface IProps {
    addNewProduct: any;
}

interface IState {
    newItem: ProductItem;

}


class AddProduct extends React.Component<IProps, IState> {

    productRESTAPI = new ProductRESTClient();

    constructor(props: IProps) {
        super(props);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setCallory = this.setCallory.bind(this);
        this.setProtein = this.setProtein.bind(this);
        this.setFats = this.setFats.bind(this);
        this.setCarbohydrates = this.setCarbohydrates.bind(this);

        this.state = {newItem: new ProductItem('', 0, 0,0,0)};
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewProduct}>
                    <input id="title" placeholder="Add new product title" onChange={this.setTitle}/> <br></br>
                    <input id="title" placeholder="Add new product callory value" onChange={this.setCallory}/><br></br>
                    <input id="title" placeholder="Add new product protein value per gram" onChange={this.setProtein}/><br></br>
                    <input id="title" placeholder="Add new product fats value per gram" onChange={this.setFats}/><br></br>
                    <input id="title" placeholder="Add new product carbohydrates value per gram" onChange={this.setCarbohydrates}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        );
    }

    getProducts(): ProductItem[]{
        let products: ProductItem[];
        products = [
            new ProductItem("Apple", 0.37, 0.002, 0.002, 0.08),
            new ProductItem("Strawberry", 0.34, 0.08, 0.004, 0.63)
        ];
        return products;
    }

    setTitle(event: any){
        this.state.newItem.title = event.target.value;
    }

    setCallory(event: any){
        this.state.newItem.callory = event.target.value;
    }

    setProtein(event: any){
        this.state.newItem.b = event.target.value;
    }

    setFats(event: any){
        this.state.newItem.z = event.target.value;
    }

    setCarbohydrates(event: any){
        this.state.newItem.u = event.target.value;
    }

    addNewProduct(event: any): void{
        event.preventDefault();
        this.productRESTAPI.create(this.state.newItem).then((res)=>console.log(res));
        this.props.addNewProduct(this.state.newItem)
    }
}

export default AddProduct;
