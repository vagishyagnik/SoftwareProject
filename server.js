const exp = require("express")
const app = exp()
const db = require('./db')
const sequelize=require('sequelize')
const CustomerTemp = db.CustomerTemp

app.use(exp.json())
app.use(exp.urlencoded({extended:true}))

app.use('/',exp.static(__dirname + '/public'));

// app.post('/addCustomer',function(req,res) {
//     console.log(req.body)
//     let obj=[]
//     let new_obj = {}
//     new_obj.Name = req.body.Name
//     new_obj.Username = req.body.Username
//     new_obj.Password = req.body.Password
//     let basta = []
//     let Items = req.body.Items
//     let Price = req.body.Price
//     new_obj.Cart = []
//     for(let i=0;i<Items.length;i++) {
//         let merasaman={
//             name: Items[i],
//             price: Price[i]
//         }
//         new_obj.Cart.push(merasaman)
//     }
//     // new_obj.Cart=toJSON(basta)
//     CustomerTemp.create({
//         Username: new_obj.Username,
//         Name: new_obj.Name,
//         Password: new_obj.Password,
//         Current_Cart_Items: new_obj.Cart
//     }).then(res.send("Success"))
    
// })

app.listen(5500,()=>{
    console.log('Server Started!!');
});