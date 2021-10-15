'use strict'

const productstoragesModel = new ProductStorages() // eslint-disable-line no-undef


function initAddForm () {
  const form = window.document.querySelector('#productstorages-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const productstoragesData = {}
    formData.forEach((value, key) => {
      productstoragesData[key] = value
    })

    if (document.getElementById("form-button").innerHTML === "Save") {
      productstoragesModel.Edit(productstoragesData)
    } else {
      productstoragesModel.Create(productstoragesData)}

    e.target.reset()
  })
}

function initList () {
  window.jQuery('#productstorages-list').DataTable({
    data: productstoragesModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Storage', data: 'storage' },
      { title: 'Product', data: 'product' },
      { title: 'Edit', data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="productstoragesModel.startEdit(' + data + ')"> Edit </button>'
        }
        return data
      }
    },
    {
      title: 'Transfer',
      data: 'id',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          data = '<button type="button" onclick="productstoragesModel.DeleteById(' + row['id'] + ')"> Transfer </button>'
        }
        return data
      }
    },
    ]
  })
}


function initListEvents () {
  document.addEventListener('productstoragesListDataChanged', function (e) {
    const dataTable = window.jQuery('#productstorages-list').DataTable()

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
