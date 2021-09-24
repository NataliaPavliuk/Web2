var shopmod = require("./shop")

class ProductsinStorage{
    constructor(id, products){
    this.id=id
    this.products=products
}
}

module.exports = {
    deliveryinstorage: deliveryinstorage, 
    ProductsinStorage: ProductsinStorage ,
    transfer: transfer,
    deleteProductStorage: deleteProductStorage,
    inshop: inshop
    } 

//m
function deliveryinstorage(id, products, productStorages){
    productStorages.push(new ProductsinStorage(id, products))
}

//n 
function deleteProductStorage(productStorages, index){
    productStorages.splice(index,1)
}

//o
function transfer(productStorages, index, newId=productStorages[index].id){
    productStorages[index].id=newId
}

//p
function inshop(productStorages, index1, newProduct=productStorages[index1].products, id, shops){
    shopmod.addShop(newProduct, id, shops)
    deleteProductStorage(productStorages, index1)
}