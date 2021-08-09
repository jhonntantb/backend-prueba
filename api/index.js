const server = require('./src/app');
const { conn, Product, Category, Office, Productimage } = require('./src/db');
const data = require ('./src/data')
const dataCategories = require ('./src/dataCategories')
const dataOffices = require ('./src/dataOffices')

// Syncing all the models at once.

const update = true ;
conn.sync({ force: update }).then(() => {

  server.listen(3001, () => {
    console.log('%s listening at 3001'); 

 // **************  PRECARGA DE DATOS A BASE DE DATOS **********************************   
    if(update) {
      dataCategories.forEach(async (e) => await Category.create(
          {name: e.name,
          }
          ));
      console.log('Categorias pre-cargadas')

      // data.forEach(async (e) => {product = await Product.create(
      //   {title: e.title,
      //   catalog_id: e.catalog_id,
      //   resume: e.resume,
      //   detail: e.detail ,
      //   price: e.price,
                
      //   })
      //   e.image.forEach( async(c) =>
      //    await Productimage.create({
      //       productId: product.id, 
      //       image_url:c
      //       }) 
      //    ) 
      //    //console.log('**************product catalog_id: ', product.catalog_id, e.category);
      //    if(e.category.length>0){
      //      //console.log('adentro!');
      //      e.category.forEach( async(n) => {    
      //        //console.log('mas adentro', n); 
      //        const categoryRec = await Category.findAll({where: {name: n}})
      //        //console.log('Catalog_id: ',product.catalog_id);
      //        //console.log(categoryRec[0]);
      //        categoryRec[0].dataValues? await product.setCategories(categoryRec[0].dataValues.id) : null ;
      //        //categoryRec[0].dataValues? console.log('product:',product.catalog_id, ' category: ',categoryRec[0].dataValues.name ) : null;
      //      })
      //    }

      // }
      // );

      console.log('Productos pre-cargados')

      dataOffices.forEach(async (e) => await Office.create(
          {name: e.name,
            address: e.address,
            phone: e.phone
          }
          ));
          console.log('Offices pre-cargadas')  
      
    }
  });
});

