const readFileSync = require('fs').readFileSync;
const path = require('path');
const hostname = require('os').hostname;
const HOST = 'http://localhost:3002'

console.log(hostname());

module.exports = {

  async up(db) {

    const data = readFileSync(path.resolve(__dirname, 'equipment.json'));
    
    const parsedData = await JSON.parse(data);

    const equipment = parsedData.map(item => {
      let newItem = {
        ...item,
        image: `/img/equipment/${item.image}`,
        thumb: `/img/equipment/${item.thumb}`
      }

      if (item.examples) {
        let examples = item.examples.map(example => {
          return {
            ...example,
            image: `/img/examples/${example.image}`,
            thumb: `/img/examples/${example.thumb}`
          }
        }
          
        )
        newItem = {
          ...newItem,
          examples
        }
      }

      return newItem;

    });
    console.log(equipment)

    await db.collection('equipment').insertMany([...equipment]);

  },


  async down(db) {

    await db.collection('equipment').deleteMany({})

  }
  
};
