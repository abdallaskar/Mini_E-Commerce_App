
class Product{

    #price = 0;
    constructor(id,name, description, imageUrl, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    setPrice(value) {
        if (value < 0 && value > 500000) {
            throw new Error("Price cannot be negative or greater than 500000");
        }
        this.#price = value;
    }

    getPrice() {
        return this.#price;
    }

}
export default Product;