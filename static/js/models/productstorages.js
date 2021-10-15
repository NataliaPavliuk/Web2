class ProductStorages extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('productstorages')
      this.fields = this.fields.concat(['storage', 'product'])
    }
  }