const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
})

function getProduct() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_manager', (err, record, fields) => {
            if (err) {
                console.log("11111111 lỗi")
                return
            }
            resolve(record)
        })
    })
}

function addProduct(name) {
    return new Promise((resolve, reject) => {
        var sql = `INSERT INTO user_manager (nameProduct,status) VALUES ('${name}', 'uncompleted')`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("thêm thành công!");
        });
    })
}

function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM user_manager WHERE id = ${id}`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    })
}

function editProduct(id, name, status) {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE user_manager SET nameProduct = '${name}' WHERE id = ${id}`;
        // const value = [name, id]
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " result updated");
        });
        if (status == "uncompleted") {
            var sql = `UPDATE user_manager SET status = "completed" WHERE id = ${id}`;
            // const value = [name, id]
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " result updated");
            });
        } 
        // else {
        //     var sql = `UPDATE user_manager SET status = "uncompleted" WHERE id = ${id}`;
        //     // const value = [name, id]
        //     connection.query(sql, function (err, result) {
        //         if (err) throw err;
        //         console.log(result.affectedRows + " result updated");
        //     });
        // }
    })
}

module.exports = ({
    getProduct,
    addProduct,
    deleteProduct,
    editProduct
})
