'use strict'

const shopModel = new Shop() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#shop-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const shopData = {}
    formData.forEach((value, key) => {
      shopData[key] = value
    })

    if (document.getElementById("form-button").innerHTML === "Save") {
      shopModel.Edit(shopData)
    } else {
      shopModel.Create(shopData)
    }

    e.target.reset()
  })
}

function initList () {
  window.jQuery('#shop-list').DataTable({
    data: shopModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Address', data: 'address' },
      { title: 'Edit', data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="shopModel.startEdit(' + data + ')"> Edit </button>'
        }
        return data
      }
    },
    {
      title: 'Delete',
      data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="shopModel.DeleteById(' + row['id'] + ')"> Delete </button>'
        }
        return data
      }
    },
    ]
  })
}

function initListEvents () {
  document.addEventListener('shopsListDataChanged', function (e) {
    const dataTable = window.jQuery('#shop-list').DataTable()

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