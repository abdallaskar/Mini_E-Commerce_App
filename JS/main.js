import Controller from './controller.js';

export const controller = new Controller();

// Create products using the controller
const product1 = controller.createProduct(1, "Laptop", "High performance laptop", "Images/1.jpg", "ele", 1200);
const product2 = controller.createProduct(2, "T-shirt", "Cotton T-shirt", "Images/2.jpg", "cloth", 20);
const product3 = controller.createProduct(3, "Sneakers", "Running shoes", "Images/3.jpg", "shoes", 60);
const product4 = controller.createProduct(4, "Smartphone", "Latest model smartphone", "Images/4.jpg", "ele", 800);
const product5 = controller.createProduct(5, "Jeans", "Denim jeans", "Images/5.jpg", "cloth", 40);
const product6 = controller.createProduct(6, "Boots", "Leather boots", "Images/6.jpg", "shoes", 100);
const product7 = controller.createProduct(7, "Tablet", "10-inch tablet", "Images/7.jpg", "ele", 300);
const product8 = controller.createProduct(8, "Sweater", "Wool sweater", "Images/8.jpg", "cloth", 50);
// Add products to the controller
controller.addProduct(product1);
controller.addProduct(product2);
controller.addProduct(product3);
controller.addProduct(product4);
controller.addProduct(product5);
controller.addProduct(product6);
controller.addProduct(product7);
controller.addProduct(product8);







