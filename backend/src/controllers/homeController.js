const connection = require('../configs/db')

const getProductList = async (req, res) => {
    let products = []
    connection.query('select * from products', function(err, results, fields){
        products = results
        res.send(JSON.stringify(products))
    })
  
}

module.exports = {
    getProductList
}