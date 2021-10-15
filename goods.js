

class Product{
    constructor(id,name,country){
        this.id=id
        this.name=name
        this.country=country
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
function addProduct(id, products, country, goods){
    ids = goods.map(el => el.id); 
    if( ids.includes(id)){
        console.log("This id exists")
    }
    else{
    goods.push(new Product(id, products, country));
    }
    }

//f
function editProduct(goods, index, newProduct=goods[index].name, newCountry=goods[index].country){
    
    goods[index].name=newProduct;
    goods[index].country=newCountry
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