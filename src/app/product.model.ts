
export class Product{
    constructor(private name:string, private description:string, private price:number, private imageURL:string){}

    set Name(name:string){
        this.name = name;
    }

    get Name():string{
        return this.name;
    }

    set Description(description:string){
        this.description = description;
    }

    get Description():string{
        return this.description;
    }

    set Price(price:number){
        this.price = price;
    }

    get Price():number{
        return this.price;
    }

    set ImageURL(imageURL:string){
        this.imageURL = imageURL;
    }

    get ImageURL():string{
        return this.imageURL;
    }
}