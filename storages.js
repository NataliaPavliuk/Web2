const { ExitStatus } = require("typescript")
const productStoraje = require("./productStoraje")

class NewStorage{
    constructor(id, shop, capacity ){
    this.id=id
    this.shop=shop
    this.capacity=capacity
    }
}

module.exports = {
    addStorages: addStorages, 
    NewStorage: NewStorage ,
    editStorage: editStorage,
    deleteStorages: deleteStorages,
    SearchStorage: SearchStorage,
    storageCapacity: storageCapacity,
    CountOfGoods: CountOfGoods
    } 

function storageCapacity(storages, productStorages){
    /*str=[]
    storage = storages.map(el => el.capacity) 
    storage.forEach(function(str){
    if(storage<(0.2*productStorages)){
        str+=storage
        return str
    }*/
    console.log(storages.find(el => el.capacity<0.2*productStorages))
   // })
}

function CountOfGoods(storages, searchsorage){
   storage = storages.map(el => el.shop)
   var str = storage.filter(function(item) { return item == searchsorage; });
   console.log(str.length)
}


//i 
function addStorages(id, shop, capacity, storages, productStorages){
    ids = storages.map(el => el.id) 
    if( (ids.includes(id)) || (capacity>productStorages)){
        console.log("Error")
        return process.exit(1)
    }
    else{
    storages.push(new NewStorage(id, shop, capacity))
    }
}

//j
function editStorage(storages, index, NewShop=storages[index].shop, NewCapacity, productStorages){
    storages[index].shop=NewShop
    if( NewCapacity>productStorages){
        console.log("Your capacity is greater than the quantity of products in storage")
    }
    else{
    storages[index].capacity=NewCapacity
    }
}   

//k
function deleteStorages(storages, index){
    storages.splice(index,1);
}

//l
function SearchStorage(storages, index){
    console.log("Searching storage:")
    console.log(storages[index])
}

