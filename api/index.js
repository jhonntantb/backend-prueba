const server = require('./src/app');
const { conn, Product } = require('./src/db');
const data = require ('./src/data')

// Syncing all the models at once.
const update = true ;
conn.sync({ force: update }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
    if(update) {
      data.forEach(async (e) => await Product.create(
        {title: e.title,
        catalog_id: e.catalog_id,
        resume: e.resume,
        detail: e.detail ,
        price: e.price
        }
        ));
      console.log('Productos pre-cargados')
    }
  });
});