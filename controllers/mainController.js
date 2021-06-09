const path = require('path');
// const db = require('../database/models');
// const Products = db.Product;
// const sequelize = require('sequelize');

module.exports = {
    catalogo: (req, res) => { 
        // products.findAll()
        // .then ((productos)=>{
        res.render(path.resolve(__dirname, '../views/main/catalog'), {
            title: "Catálogo de productos",
            styles:["masonryColumns.css"]
        })
        // })
        // .catch(error => res.send(error))
    },
}