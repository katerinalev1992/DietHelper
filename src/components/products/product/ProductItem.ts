import Util from "../../../util/Util";

export default class ProductItem {
    id: string;
    title: string;
    callory: number;
    b: number;
    z: number;
    u: number;

    constructor(title: string, callory: number, belky: number, zhyry: number, uglovody: number, id?: string) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = Util.guid();
        }
        this.title = title;
        this.callory = callory;
        this.b = belky;
        this.z = zhyry;
        this.u = uglovody;
    }

    public getId() {
        return this.id;
    }
}