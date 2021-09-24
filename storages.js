class NewStorage{
    constructor(id){
    this.id=id
    }
}

module.exports = {
    addStorages: addStorages, 
    NewStorage: NewStorage ,
    editStorage: editStorage,
    deleteStorages: deleteStorages,
    SearchStorage: SearchStorage
    } 

//i 
function addStorages(id, storages){
    storages.push(new NewStorage(id));
    }

//j
function editStorage(storages, index, newId=storages[index].id){
    storages[index].id=newId;
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

