const server = require('./src/app');
const { conn, Product, Category, Office, Productimage, User, Stock, Review } = require('./src/db');
const {DB_USER, DB_PASSWORD, DB_HOST, ELEPHANT_CONNECT, CONNECT} = process.env;
const data = require ('./src/datasets/data')
const dataCategories = require ('./src/datasets/dataCategories')
const dataOffices = require ('./src/datasets/dataOffices')
const dataUsers = require ('./src/datasets/dataUsers')
const dataReviews = require ('./src/datasets/dataReviews')

// Syncing all the models at once.
console.log('Connect: ', CONNECT)

// Para la base local poner en true para recarga productos ejemplo o false para no recargar
const update = true ;

// Si se va a usar la base de la cloud, el update debe estar en false para que no se pierda la info que vamos ingresando.
// Por favor no cambiar !
CONNECT === 'CLOUD' ? update = false : null ;
conn.sync({ force: update }).then(() => {

  server.listen(3001, () => {
    console.log('%s listening at 3001'); 

 // ************  POR FAVOR NO COMENTAR ****************** //   

 // **************  PRECARGA DE DATOS A BASE DE DATOS **********************************   
     if(update) {
       // Categorias
       dataCategories.forEach(async (e) => await Category.create(
           {name: e.name,
           }
           ));
       console.log('Categorias pre-cargadas')

       // Oficinas
       dataOffices.forEach(async (e) => await Office.create(
           {name: e.name,
            codesuc: e.codesuc,
             address: e.address,
             phone: e.phone
           }
           ));
      
           console.log('Oficinas pre-cargadas')


       // Productos
       if(CONNECT === 'CLOUD' && update === true){
         for(let i=1001; i<1051; i++) {
          Product.create(
            {
              catalog_id: i,    
            }
          )
          .then(res => {
            Productimage.create({
              productId: res.id,
              image_url: "https://http2.mlstatic.com/D_Q_NP_2X_909631-MLA46779834800_072021-R.webp"
            })

          })
         }
       }
       else
       {

        data.forEach(async (e) => {product = await Product.create(
          {title: e.title,
          catalog_id: e.catalog_id,
          resume: e.resume,
          detail: e.detail ,
          price: e.price,
              
          })
   
            e.image.forEach( async(c) =>
             await Productimage.create({
                productId: product.id, 
                image_url:c
                }) 
             ) 
          
           //console.log('**************product catalog_id: ', product.catalog_id, e.category);
           if(e.category.length>0){
             //console.log('adentro!');
             for(let i=0; i<e.category.length; i++)
             {
               //console.log('dentro del for', i); 
               const categoryRec = await Category.findOne({where: {name: e.category[i]}})
               //console.log('Catalog_id: ',product.catalog_id);
               //console.log('categoryRec: ',categoryRec);
               categoryRec.dataValues? await product.setCategories(categoryRec.dataValues.id) : null;
               //categoryRec[0].dataValues? console.log('product:',product.catalog_id, ' category: ',categoryRec[0].dataValues.name ) : null;
            
             }
            }
  
        });
        
      }
       console.log('Productos pre-cargados')



       // Usuarios
       dataUsers.forEach(async (e) => await User.create(
         { user_name: e.user_name,
           first_name: e.first_name,
           last_name: e.last_name,
           email: e.email,
           isAdmin: e.isAdmin,
           active: e.active,
           address: e.address,
           location: e.location,
           province: e.province,
           country: e.country,
          
         }
         ));
         console.log('Users pre-cargados')  
        
      //  Reviews  (Todavia no se como pre-cargar las reviews. Las promesas no funcionan con el forEach)
////////////////////////////////////////////////////////////
     /*  for(let i=0; i<dataReviews.length; i++){
        console.log('Review ',dataReviews[i]);
        const product = Product.findOne({where: {catalog_id: dataReviews[i].catalog_id}})
        
        const user =  User.findOne({where: {user_name: dataReviews[i].user_name}})
       
        Promise.all([product, user]).then((res) => {
          console.log(res);         
          if(res[0] && res[1]) {
            dataReviews.create(
          { date: dataReviews[i].date,
            score: dataReviews[i].score,
            description: dataReviews[i].description,
            productId: res[0].dataValues.id,
            userId: res[1].dataValues.id,
          })
         } 
         } )
      } */
///////////////////////////////////////////////////////////

/*       const datos =  
       dataReviews.map((e) => {
         return new Promise(async (resolve, reject) => 
         {
         console.log('Review ',e);
         const product =  await Product.findOne({where: {catalog_id: e.catalog_id}})
         console.log('Product: ',product);
         const user =  await User.findOne({where: {user_name: e.user_name}})
         console.log('User: ',user.dataValues);
         if(product && user) {
            await Review.create(
            { date: e.date,
              score: e.score,
              description: e.description,
              productId: product.dataValues.id,
              userId: user.dataValues.id,
            })
         }  
       }) 
        }
         )
         Promise.all(datos)
         .then((res) => console.log('Reviews recargados'))
         .catch(err => console.log(err))  */

///////////////////////////////////////////////////////////////////////////

  
  
/*   const creaReview = async function(e)
   {
     console.log('Review: ',e)
     const product =  await Product.findAll({where: {catalog_id: e.catalog_id}})
     console.log('Product: ',product);
     const user =  await User.findOne({where: {user_name: e.user_name}})
     console.log('User: ',user.dataValues);
     if(product && product.length > 0 && user) {
        await Review.create(
        { date: e.date,
          score: e.score,
          description: e.description,
          productId: product.dataValues.id,
          userId: user.dataValues.id,
        })
     } 
   }
   creaReview(dataReviews[0])
   console.log('Reviews pre-cargados')  */

 
////////////////////////////////////////////////////////////////////////////////////  

         

       
       
   }
  });
});

