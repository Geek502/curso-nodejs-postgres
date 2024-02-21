const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');


class OrderService {

  constructor(){
    this.orders = [];
    this.create();
    this.pool = pool;
    this.pool.on('error',(err)=>console.log(err));
  }
  async create(data) {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.orders.push({
        id: faker.datatype.uuid(),
        description: faker.lorem.paragraph(),
      })
    }
   // return data;
  }

  async find() {
    return this.orders;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
