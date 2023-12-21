const express = require('express')
const router = express.Router()
const data = require('../mysql')

router.get('/todo', async (req, res) => {
    let result = await data.getProduct();
    res.send(result)
})

router.post("/todo", async (req, res) => {
    console.log("addddddd")
    console.log(req.body);
    const { name } = req.body
    data.addProduct(name)
    let result = await data.getProduct()
    res.send(result)
})

router.delete("/todo/:id", async (req, res) => {
    console.log(req.params);
    const { id } = req.params
    data.deleteProduct(id)
    let result = await data.getProduct()
    res.send(result)
})

router.put("/todo/:id", async (req, res) => {
    const { id } = req.params
    const { name, status } = req.body
    console.log(status);
    data.editProduct(id, name, status)
    let result = await data.getProduct()
    res.send(result)

})

module.exports = router