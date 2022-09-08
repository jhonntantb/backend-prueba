const server = require("./src/app");
const {
  conn,
  Product,
  Category,
  Office,
  Productimage,
  User,
  Stock,
  Review,
} = require("./src/db");
const { DB_USER, DB_PASSWORD, DB_HOST, ELEPHANT_CONNECT, CONNECT } =
  process.env;
const data = require("./src/datasets/data");
const dataCategories = require("./src/datasets/dataCategories");
const dataOffices = require("./src/datasets/dataOffices");
const dataUsers = require("./src/datasets/dataUsers");
const dataReviews = require("./src/datasets/dataReviews");

// Syncing all the models at once.
//console.log('Connect: ', CONNECT)

// Para la base local poner en true para recarga productos ejemplo o false para no recargar
var update = false;

// Si se va a usar la base de la cloud, el update debe estar en false para que no se pierda la info que vamos ingresando.
// Por favor no cambiar !
CONNECT === "CLOUD" ? (update = false) : null;
conn.sync({ force: update }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3001");

    // ************  POR FAVOR NO COMENTAR ****************** //

    // **************  PRECARGA DE DATOS A BASE DE DATOS **********************************
    // Solo se realiza para la base local y si el update esta en true.
    if (update && CONNECT === "LOCAL") {
      // Categorias
      dataCategories.forEach(
        async (e) => await Category.create({ name: e.name })
      );
      console.log("Categorias pre-cargadas");

      // Oficinas
      dataOffices.forEach(
        async (e) =>
          await Office.create({
            name: e.name,
            codesuc: e.codesuc,
            address: e.address,
            phone: e.phone,
          })
      );

      console.log("Oficinas pre-cargadas");

      // Usuarios
      dataUsers.forEach(
        async (e) =>
          await User.create({
            user_name: e.user_name,
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
            isAdmin: e.isAdmin,
            active: e.active,
            address: e.address,
            location: e.location,
            province: e.province,
            country: e.country,
          })
      );
      console.log("Users pre-cargados");

      // Productos
      data.forEach(async (e) => {
        product = await Product.create({
          title: e.title,
          catalog_id: e.catalog_id,
          resume: e.resume,
          detail: e.detail,
          price: e.price,
        });

        e.image.forEach(
          async (c) =>
            await Productimage.create({
              productId: product.id,
              image_url: c,
            })
        );

        //console.log('**************product catalog_id: ', product.catalog_id, e.category);
        if (e.category.length > 0) {
          //console.log('adentro!');
          for (let i = 0; i < e.category.length; i++) {
            //console.log('dentro del for', i);
            const categoryRec = await Category.findOne({
              where: { name: e.category[i] },
            });
            //console.log('Catalog_id: ',product.catalog_id);
            //console.log('categoryRec: ',categoryRec);
            categoryRec.dataValues
              ? await product.setCategories(categoryRec.dataValues.id)
              : null;
            //categoryRec[0].dataValues? console.log('product:',product.catalog_id, ' category: ',categoryRec[0].dataValues.name ) : null;
          }
        }
      });
      console.log("Productos pre-cargados");
    }
    ///////// FIN PRECARGA BASE DE DATOS LOCAL ////////////////
  }); // Cierra el server.listen
}); // Cierra el conn.sync
