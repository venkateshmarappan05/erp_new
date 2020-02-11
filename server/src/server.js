import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'
import product from './routes/product'
const app = new express()

app.use(bodyParser.json())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}


app.use(cors(corsOptions))

app.use('/api/product',product)

app.listen(8000, () => {
    console.log('Server started!');
});

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'manickam001@gmail.com',
//         pass: 'xxxxxx'
//     }
// });



// app.route('/api/items/list').get((req, res) => {
//     const query = "select * from V_ARC_Items WITH (NOLOCK) WHERE (ISNULL(ProductName, '') = '' OR ISNULL(CategoryGroup, '--') = '--' OR ISNULL(Category, '--') = '--' OR ISNULL(ItemFamily, '--') = '--' OR ISNULL(ItemSubFamily, '--') = '--')";
//     var Items = [];

//     sql.query(connectionString, query, (err, rows) => {
//         Items = rows;
//         var mailbody = '';
//         if (Items !== undefined && Items !== null && Items.length > 0) {
//             mailbody = "Product Codes\n"
//             Items.forEach(Item => {
//                 mailbody = mailbody + ""+ Item.Product_Code +"\n";
//                 console.log(Item.Product_Code);
//             });
//             mailbody = mailbody + "";
//         }

//         if (mailbody !== undefined && mailbody !== null && mailbody !== '') 
//         {
//             var mailOptions = {
//                 from: 'manickam001@gmail.com',
//                 to: 'manickam.g@inexgen.com',
//                 subject: 'There was So some products was missing the mappings!',
//                 text: mailbody
//             };

//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log('Email sent: ' + info.response);
//                 }
//             });
//         }

//         //console.log(Items);
//         res.send({
//             items: rows,
//         })
//     });
// });

// app.route('/api/items/:code').get((req, res) => {
//     const requestedCatName = req.params['code'];

//     res.send({ code: requestedCatName });
// });

// app.route('/api/items/:code').post((req, res) => {
//     const requestedCatName = req.params['code'];
//     res.send(201, req.body)
// });

// app.route('/api/items/:code').put((req, res) => {
//     res.send(200, req.body)
// });

// app.route('/api/items/:code').delete((req, res) => {
//     res.sendStatus(204)
// })
