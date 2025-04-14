

import  Product from './product.js';

class Controller{

    constructor(){
        this.products = [];
    }

    createProduct(id, name, description, imageUrl, category, price) {
        const product = new Product(id, name, description, imageUrl, category);
        product.setPrice(price); // Set the price using the setter method
        return product;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id){
        const index = this.products.findIndex(function(element){
            return element.id === id;
        });
        if(index !== -1){
            this.products.splice(index, 1);
        }
    }
        getElectronicsProducts() {
        return this.products.filter(function(element){
            return (element.category === "ele") ? element : null;
        });
    }
    getClothingProducts(){
        return this.products.filter(function(element){
            return element.category === "cloth";
        })
    }
    getShoesProducts(){
        return this.products.filter(function(element){
            return element.category === "shoes";
        })
    }
    getAllProducts(){
        return this.products;
    }
    sortProductsByprice(){
        this.products.sort(function(element1, element2){
            return element1.getPrice() - element2.getPrice();
        });
    }
    sortProductsBypriceDes(){
        this.products.sort(function(element1, element2){
            return element2.getPrice() - element1.getPrice();
        });
    }
    sortProductsByID(){
        this.products.sort(function(element1, element2){
            return element1.id - element2.id;
        });
    }


    editProductPrice(id,newPrice){
        const index = this.products.findIndex(function(element){
            return element.id === id;
        });
        if(index !== -1){
            this.products[index].setPrice(newPrice); // Use the setter method to set the price
        }
    }
    searchById(id) {
        return this.products.find(function(product) {
            return product.id === id;
        });
    }
    searchByName(name) {
        return this.products.filter(function(element) {
            return element.name.toLowerCase().includes(name.toLowerCase());
        });
    }


}
export default Controller ;