const path = require('path')

const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/static/views'))
app.set('view engine', 'pug')

app.get('/', function (request, response) {
  response.render('pages/index', { title: 'Home' })
})
app.get('/shop', function (request, response) {
  response.render('pages/shop', { title: 'Shop' })
})
app.get('/goods', function (request, response) {
    response.render('pages/goods', { title: 'Goods' })
  })
app.get('/storages', function (request, response) {
    response.render('pages/storages', { title: 'Storages' })
  })
app.get('/productstorages', function (request, response) {
    response.render('pages/productstorages', { title: 'Product in Storages' })
  })

app.listen(process.env.PORT || 8080)