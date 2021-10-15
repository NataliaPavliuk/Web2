

var goodsmod = require("./goods")

class Shop{
    constructor(name, address){
    this.name=name
    this.address = address
    }
}

//a
function addShop(address, name, shops){
shops.push(new Shop(name, address));
}

module.exports = {
    addShop: addShop, 
    Shop: Shop ,
    editShop: editShop,
    deleteShop: deleteShop,
    SearchShop: SearchShop
    } 

//b
function editShop(shops, searchname, newName=shops[index].name, newAddress=shops[index].address){
    const names = shops.map(el => el.name);
    var index = names.indexOf(searchname);
    shops[index].name=newName;
    shops[index].address=newAddress;
}

//c
function deleteShop(shops, searchname){
    const names = shops.map(el => el.name);
    shops.splice(names.indexOf(searchname),1);
}

//d
function SearchShop(shops, searchname){
    console.log("Searching shop:")
    console.log(shops.find(el => el.name == searchname))
}



/*function addGoods(names, goods){
    goods.name = names;
    goods.push(goods);
    }

FoodShop = new NewShop()
addShop(FoodShop, ["Tomato", "Onion"], 1)

ClothesShop=new NewShop()
addShop(ClothesShop, ["Dress", "Sweater", "Vest"], 2 )
console.log(shops)

Tomato = new NewProduct()
addGoods("tomato", Tomato)
console.log(goods)

function SearchShop(name){
    for(let item of shops){
        if(item==name){
        console.log('Result search:');
        console.log(item);
        }
    }
}

Shop.add(ClothesShop=new NewShop())
ClothesShop.name="Clother"
ClothesShop.Products = ["Dress", "Sweater", "Vest"];

SearchShop(FoodShop);


console.log(Shop);



ProductStorage.add(PStorage1=new ProductsinStorage())
PStorage1.id="1"
PStorage1.Products=["Dress","Vest"]

ProductStorage.add(PStorage2=new ProductsinStorage())
PStorage2.id="2"
PStorage2.Products=["Sweater","Vest"]

Storages.add(Storage1=new NewStorage())
Storage1.id="1"

Storages.add(Storage2=new NewStorage())
Storage1.id="2"

Storages.add(Storage3=new NewStorage())
Storage1.id="3"

Goods.add(Product1=new NewProduct())
Product1.name="Onion"*/
