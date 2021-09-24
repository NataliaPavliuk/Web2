

class Product{
    constructor(name){
    this.name=name
    }
}

module.exports = {
    addProduct: addProduct, 
    Product: Product ,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    SearchProduct: SearchProduct
    } 

//e
function addProduct(products, goods){
    goods.push(new Product(products));
    }

//f
function editProduct(goods, index, newProduct=goods[index].name){
    
    goods[index].name=newProduct;
}

//g
function deleteProduct(goods, index){
    goods.splice(index,1);
}

//h
function SearchProduct(goods, index){
    console.log("Searching product:")
    console.log(goods[index])
}