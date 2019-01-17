import ProductItem from "../../components/products/product/ProductItem";
import {Config} from "../Config";

export default class ProductRESTClient {
    private REST_URL = Config.restURL;
    private PRODUCTS = '/products';
    private SAVE = this.PRODUCTS + '/save';
    private REMOVE = this.PRODUCTS + '/delete';
    private GET_All = this.PRODUCTS + '/getAll';

    public create(product: ProductItem): Promise<any> {
        return fetch(this.REST_URL +  this.SAVE, this.getPOSTFetchObject('POST', product));
    }

    public remove(product: ProductItem): Promise<any> {
        return fetch(this.REST_URL +  this.REMOVE + '/' + product.getId(), this.getFetchObject('DELETE'));
    }

    public getAll(): Promise<any> {
        return fetch(this.REST_URL + this.GET_All, this.getFetchObject('GET'));
    }

    private getPOSTFetchObject(method: string, body: ProductItem): object {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: method,
            body: JSON.stringify(body)
        }
    }

    private getFetchObject(method: string): object {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: method
        }
    }
}