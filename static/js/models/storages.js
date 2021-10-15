class Storages extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('storages')
      this.fields = this.fields.concat(['id', 'shop', 'capacity'])
    }
  }