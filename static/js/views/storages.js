'use strict'

const storagesModel = new Storages() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#storages-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const storagesData = {}
    formData.forEach((value, key) => {
      storagesData[key] = value
    })

    if (document.getElementById("form-button").innerHTML === "Save") {
      storagesModel.Edit(storagesData)
    } else {
      storagesModel.Create(storagesData)
    }

    e.target.reset()
  })
}

function initList () {
  window.jQuery('#storages-list').DataTable({
    data: storagesModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Shop', 
      data: 'shop'
      },
      { title: 'Capacity', data: 'capacity'},
      { title: 'Transfer', data: 'id', 
        render: function (data, type, row, meta) {
          if (type === 'display'){
            data = '<button type="button" onclick="storagesModel.startEdit(' + data + ')"> Transfer </button>'
          }
          return data
      }
      },
      {
        title: 'Delete',
        data: 'id',
        render: function (data, type, row, meta) {
          if (type === 'display') {
            data = '<button type="button" onclick="storagesModel.DeleteById(' + row['id'] + ')"> Delete </button>'
          }
          return data
        }
      },
    ]
  })
}


function initListEvents () {
  document.addEventListener('storagesListDataChanged', function (e) {
    const dataTable = window.jQuery('#storages-list').DataTable()

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
