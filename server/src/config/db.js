import sql from 'mssql';
var config = {
    user: 'SA',
    password: 'Appa@123',
    server: 'localhost', 
    database: 'Minerva_DMS071_2019' ,
    options:{
        enableArithAbort:false
    }
};
// var config = {
//     server: 'localhost',
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'SA',
//             password: 'Appa@123'
//         }
//     },
//     options: {
//         database: 'SAMPLE',
//         rowCollectionOnRequestCompletion:true
//     }
// }
var connection =sql.connect(config)
var request = new sql.Request();


export { connection ,request}