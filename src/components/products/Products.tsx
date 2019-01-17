import * as React from "react";
import './Products.css';
import ProductItem from "./product/ProductItem";
import Product from "./product/Product";
import AddProduct from "./addProduct/AddProduct";
import ProductRESTClient from "../../util/restClient/ProductRESTClient";

export interface IProps {
    opt?: string
}

interface IState {
    products: ProductItem[];
    addNewProductFlag: boolean;
}

class Products extends React.Component<IProps, IState> {
    productRESTAPI = new ProductRESTClient();


    constructor(props: IProps) {
        super(props);
        this.state = {
            products: [], addNewProductFlag: false
        };

        const that = this;
        this.getProducts().then((products: Array<ProductItem>) => {
            that.setState({products: products});
        });

    }

    render() {
        let addProductCoomponent;
        if (this.state.addNewProductFlag) {
            addProductCoomponent = <div>
                <div onClick={this.hideAddNewProduct.bind(this)}>X</div>
                <AddProduct addNewProduct={this.handleAddNewProduct.bind(this)}/>
            </div>;
        } else {
            addProductCoomponent =
                <button onClick={this.showAddNewProduct.bind(this)} className={"addNewProductBtn"}>Add new
                    product</button>;
        }

        return (
            <div className={"container"}>
                <h2>Products {addProductCoomponent}</h2>

                <ul>{this.state.products.map((item: ProductItem) =>
                    <div key={item.getId()}>
                        <Product product={item} onRemoveProductClick={this.removeProduct.bind(this)}/>
                    </div>
                )}</ul>


            </div>
        );
    }

    getProducts(): any{
        const products: Array<ProductItem> = [];

        return new Promise((resolve, reject) => {
            this.productRESTAPI.getAll().then(
                (res) => {
                    res.json().then(
                        (data: any) => {
                            data.products.map((item: ProductItem, index: number) => {
                                const product = new ProductItem(item.title, item.callory, item.b, item.z, item.u, item.id);
                                products.push(product);
                            });
                            resolve(products);
                        })
                        .catch((err: any) => {
                            console.log(err);
                            reject(err);
                        })
                });
        });

    }

    handleAddNewProduct(newItem: ProductItem) {
        this.addProduct(newItem);
    }

    addProduct(newItem: ProductItem): void {
        let products = this.state.products;
        products.push(newItem);
        this.setState({products: products});
    }

    removeProduct(product: ProductItem): void {
        const products = this.state.products.filter((item) => {
            return item !== product
        });
        this.productRESTAPI.remove(product).then((res) => console.log(res));

        this.setState({products});
    }

    showAddNewProduct() {
        this.setState({addNewProductFlag: true});
        this.NewProductComponent();
    }

    NewProductComponent() {
        return (<div>
            <div onClick={this.hideAddNewProduct}>X</div>
            <AddProduct addNewProduct={this.handleAddNewProduct}/>
        </div>);
    }

    hideAddNewProduct() {
        this.setState({addNewProductFlag: false});
    }
}

export default Products;
