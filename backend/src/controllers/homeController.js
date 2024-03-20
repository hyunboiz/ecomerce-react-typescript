const connection = require('../configs/db')

const getProductList = async (req, res) => {
    let products = []
    connection.query('select * from products', function(err, results, fields){
        products = results
        // Remove when production
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        // End
        res.send(JSON.stringify(products))
    })
  
}

module.exports = {
    getProductList
}