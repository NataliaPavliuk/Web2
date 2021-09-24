'use strict'

var shopmod  = require("./shop")
var goodsmod = require("./goods")
var storagesmod = require("./storages")
var productinstormod = require("./productStoraje")
var shops = []
var goods = []
var storages=[]
var productStorages=[]


shopmod.addShop("tomato", 0, shops)
shopmod.addShop("cucumber", 1, shops)
shopmod.addShop("bread", 2, shops)
console.log("\nShops:")
console.log(shops)
shopmod.editShop(shops, 0, 0, "onion")
shopmod.deleteShop(shops, 1)
console.log("After:")
console.log(shops)
goodsmod.addProduct("pasta", goods)
console.log("\nProducts:")
console.log(goods)
goodsmod.editProduct(goods, 0, "apple")
console.log("After:")
console.log(goods)
goodsmod.deleteProduct(goods, 0)
console.log("Delete:")
console.log(goods)
storagesmod.addStorages(0, storages)
storagesmod.addStorages(1, storages)
console.log("\nStorages:")
console.log(storages)
storagesmod.editStorage(storages, 1, 0)
storagesmod.deleteStorages(storages, 1)
console.log("After:")
console.log(storages)
storagesmod.SearchStorage(storages, 0)
productinstormod.deliveryinstorage(0, "lime", productStorages)
productinstormod.deliveryinstorage(1, "lemon", productStorages)
productinstormod.deliveryinstorage(2, "chocolate", productStorages)
console.log("\nProducts in storage:")
console.log(productStorages)
productinstormod.transfer(productStorages, 2,1)
productinstormod.inshop(productStorages, 0, productStorages[0].products, 2, shops)
console.log("Arter:")
console.log(productStorages)
console.log(shops)
