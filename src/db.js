require("dotenv").config();
const { Sequelize, UUIDV4 } = require("sequelize");
const { DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { Console } = require("console");
const { DB_USER, DB_PASSWORD, DB_HOST, ELEPHANT_CONNECT, CONNECT } =
  process.env;
console.log(CONNECT);
console.log(DB_HOST);

if (CONNECT === "CLOUD") {
  // Codigo para cloud service
  console.log("Conexión a base cloud");
  var sequelize = new Sequelize(ELEPHANT_CONNECT, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
} else {
  //Codigo para Postgress local
  console.log("Conexión a base local");
  var sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/merceria`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
}

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "./models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "./models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Bundle,
  Category,
  Office,
  Order,
  Product,
  Review,
  Schedule,
  Stock,
  User,
  Wishlist,
  BuyHistory,
  Productfeature,
  Productimage,
} = sequelize.models;

/*Product.belongsToMany(Productfeature,{through:"product_feature"});
Productfeature.belongsTo(Product,{foreignKey:"product_id"});*/

BuyHistory.belongsToMany(Order, { through: "buyhistory_order" });
Order.belongsToMany(BuyHistory, { through: "buyhistory_order" });

const bundle_product = sequelize.define("bundle_product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

Bundle.belongsToMany(Product, { through: "bundle_product" });
Product.belongsToMany(Bundle, { through: "bundle_product" });

/* const Category_Product = sequelize.define('Category_Product', {
  id: {type: DataTypes.UUID,
  allowNull: false,
  primaryKey: true}
}); */

Category.belongsToMany(Product, { through: "Category_Product" });
Product.belongsToMany(Category, { through: "Category_Product" });

const Order_Product = sequelize.define("Order_Product", {
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
  unitprice: { type: DataTypes.FLOAT, defaultValue: 0 },
  totalcost: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.unitprice * this.quantity;
    },
  },
});

// Super Many-to-Many Relationship (ver documentacion sequelize)
Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });
Product.hasMany(Order_Product);
Order_Product.belongsTo(Product);
Order.hasMany(Order_Product);
Order_Product.belongsTo(Order);

// const Order_Schedule = sequelize.define('Order_Schedule', {
//   id: {type: DataTypes.UUID,
//     allowNull: false,
//     primaryKey: true},
// });

// Order.belongsToMany(Schedule, {through: Order_Schedule});
// Schedule.belongsToMany(Order, {through: Order_Schedule});

Wishlist.belongsToMany(Stock, { through: "wishlist_stock" });
Stock.belongsToMany(Wishlist, { through: "wishlist_stock" });

Product.hasMany(Productfeature);
Productfeature.belongsTo(Product);

Product.hasMany(Productimage);
Productimage.belongsTo(Product);

BuyHistory.hasMany(User);
User.belongsTo(BuyHistory);

Product.hasMany(Stock);
Stock.belongsTo(Product);

Product.hasMany(Wishlist);
Wishlist.belongsTo(Product);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

Office.hasMany(Stock);
Stock.belongsTo(Office);

Office.hasOne(Schedule);
Schedule.belongsTo(Office);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Schedule);
Schedule.belongsTo(User);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
