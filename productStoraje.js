var shopmod = require("./shop")
var storagesmod = require("./storages")

class ProductsinStorage{
    constructor(id, products, shop){
    this.id=id
    this.products=products
    this.shop=shop
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
function deliveryinstorage(shop, id, products, productStorages){
    productStorages.push(new ProductsinStorage(id, products, shop))
}

//n 
function deleteProductStorage(productStorages, searchproduct){
    const names = productStorages.map(el => el.products);
    var index = names.indexOf(searchproduct);
    productStorages.splice(index,1)
}

//o
function transfer(productStorages, index, index2){
    if(productStorages[index].shop==productStorages[index2].shop){
       deliveryinstorage(productStorages[index2].id, productStorages[index2].shop, productStorages[index].products, productStorages )
       deleteProductStorage(productStorages, productStorages[index].products)
    }
}

//p
function inshop(productStorages, Product, name, shops, address){
    shopmod.addShop(address, name, shops)
    deleteProductStorage(productStorages, Product)
}