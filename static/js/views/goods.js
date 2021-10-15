'use strict'

const goodsModel = new Goods() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#goods-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const goodsData = {}
    formData.forEach((value, key) => {
      goodsData[key] = value
    })

    if (document.getElementById("form-button").innerHTML === "Save") {
      goodsModel.Edit(goodsData)
    } else {
      goodsModel.Create(goodsData)}

    e.target.reset()
  })
}

function initList () {
  window.jQuery('#goods-list').DataTable({
    data: goodsModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Country', data: 'country' },
      { title: 'Edit', data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="goodsModel.startEdit(' + data + ')"> Edit </button>'
        }
        return data
      }
    },
    {
      title: 'Delete',
      data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="goodsModel.DeleteById(' + row['id'] + ')"> Delete </button>'
        }
        return data
      }
    },
    ]
  })
}

function initListEvents () {
  document.addEventListener('goodsListDataChanged', function (e) {
    const dataTable = window.jQuery('#goods-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
})