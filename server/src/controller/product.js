import { connection, request } from '../config/db';

const ITEM_FAMILY = 'dbo.ItemFamily';
const ITEM_SUB_FAMILY = 'dbo.ItemSubFamily'
const CATEGORY = 'dbo.Category'
const CATEGORY_GROUPS = 'dbo.CategoryGroups'

module.exports = {
    // List area
    itemList: async (req, res) => {
        request.query(`SELECT * FROM ${ITEM_FAMILY}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json(rslt['recordset'])
        });
    },

    itemSubFamilyList: async (req, res) => {
        request.query(`SELECT * FROM ${ITEM_SUB_FAMILY}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json(rslt['recordset'])
        });
    },

    categoryList: async (req, res) => {
        request.query(`SELECT * FROM ${CATEGORY}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json(rslt['recordset'])
        });
    },

    categoryGroupsList: async (req, res) => {
        request.query(`SELECT * FROM ${CATEGORY_GROUPS}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json(rslt['recordset'])
        });
    },
    // create area 
    createItems: async(req, res) => {
        let data = req.body
        let val ={
            ItemFamilyName:data.name,
            Active:1,
            CreationDate: new Date()
        }
        let cols = [];
        let inputs = [];
        for (let k in val) {
            request.input(k, val[k]);
            cols.push(k);
            inputs.push('@' + k);
        }

        request.query(`INSERT INTO ${ITEM_FAMILY} (${cols.toString()}) VALUES (${inputs.toString()})`, ( err,rslt) => {
           if(err){
            res.status(500).send({err:err})
           }
            res.status(200).send({msg:'successfully created',data:rslt})

        })
    },
    createSubItems: async(req, res) => {
        let data = req.body
        let val ={
            ItemSubFamilyName:data.name,
            Active:1,
            CreationDate: new Date()
        }
        let cols = [];
        let inputs = [];
        for (let k in val) {
            request.input(k, val[k]);
            cols.push(k);
            inputs.push('@' + k);
        }

        request.query(`INSERT INTO ${ITEM_SUB_FAMILY} (${cols.toString()}) VALUES (${inputs.toString()})`, ( err,rslt) => {
           if(err){
            res.status(500).send({err:err})
           }
            res.status(200).send({msg:'successfully created',data:rslt})

        })
    },
    CreateCategory:async(req, res) => {
        let data = req.body
        let val ={
            CategoryName:data.name,
            Active:1,
            CreationDate: new Date()
        }
        let cols = [];
        let inputs = [];
        for (let k in val) {
            request.input(k, val[k]);
            cols.push(k);
            inputs.push('@' + k);
        }
        request.query(`INSERT INTO ${CATEGORY} (${cols.toString()}) VALUES (${inputs.toString()})`, ( err,rslt) => {
           if(err){
            res.status(500).send({err:err})
           }
            res.status(200).send({msg:'successfully created',data:rslt})

        })
    },
    CreateCategoryGroup:async(req, res) => {
        let data = req.body
        let val ={
            CategoryGroupName:data.name,
            Active:1,
            CreationDate: new Date()
        }
        let cols = [];
        let inputs = [];
        for (let k in val) {
            request.input(k, val[k]);
            cols.push(k);
            inputs.push('@' + k);
        }
        request.query(`INSERT INTO ${CATEGORY_GROUPS} (${cols.toString()}) VALUES (${inputs.toString()})`, ( err,rslt) => {
           if(err){
            res.status(500).send({err:err})
           }
            res.status(200).send({msg:'successfully created',data:rslt})

        })
    },
    // Edit Area 

    // itemEdit: async (req, res) => {
    //     let data = req.body
    //     let val ={
    //         ItemFamilyName:data.name,
    //         Active:1,
    //         CreationDate: new Date()
    //     }
    //     let cols = [];
    //     let inputs = [];
    //     for (let k in val) {
    //         request.input(k, val[k]);
    //         cols.push(k);
    //         inputs.push('@' + k);
    //     }

    //     request.query(`UPDATE ${ITEM_FAMILY} SET [${cols.toString()},${inputs.toString()}] WHERE ItemFamilyId=${req.body.id}`, function (err, rslt) {
    //         if (err){ 
    //             console.log(err)
    //         } else {
    //             res.status(200).json({status:'success',message:'Edited successfully'})
    //         }
    //     });
    // },

    // itemSubFamilyEdit: async (req, res) => {
    //     let id =  req.body.id
    //     let deleteData = 0
    //     request.query(`UPDATE ${ITEM_SUB_FAMILY} SET Active = ${deleteData}  WHERE ItemSubFamilyId=${id}`, function (err, rslt) {
    //         if (err) console.log(err)
    //         res.status(200).json({status:'success',message:'deleted successfully'})
    //     });
    // },
    // categoryEdit: async (req, res) => {
    //     let id =  req.body.id
    //     let deleteData = 0
    //     request.query(`UPDATE ${CATEGORY} SET Active = ${deleteData}  WHERE CategoryId=${id} `, function (err, rslt) {
    //         if (err) console.log(err)
    //         res.status(200).json({status:'success',message:'deleted successfully'})
    //     });
    // },

    // categoryGroupsEdit: async (req, res) => {
    //     let id =  req.body.id
    //     let deleteData = 0
    //     request.query(`UPDATE ${CATEGORY_GROUPS} SET Active = ${deleteData}  WHERE CategoryGroupId=${id} `, function (err, rslt) {
    //         if (err) console.log(err)
    //         res.status(200).json({status:'success',message:'deleted successfully'})
    //     });
    // },

    
    //Delete Area
    itemDelete: async (req, res) => {
        let id =  req.body.id
        let deleteData = 0
        request.query(`UPDATE ${ITEM_FAMILY} SET Active = ${deleteData}  WHERE ItemFamilyId=${id}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json({status:'success',message:'deleted successfully'})
        });
    },

    itemSubFamilyDelete: async (req, res) => {
        let id =  req.body.id
        let deleteData = 0
        request.query(`UPDATE ${ITEM_SUB_FAMILY} SET Active = ${deleteData}  WHERE ItemSubFamilyId=${id}`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json({status:'success',message:'deleted successfully'})
        });
    },
    categoryDelete: async (req, res) => {
        let id =  req.body.id
        let deleteData = 0
        request.query(`UPDATE ${CATEGORY} SET Active = ${deleteData}  WHERE CategoryId=${id} `, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json({status:'success',message:'deleted successfully'})
        });
    },

    categoryGroupsDelete: async (req, res) => {
        let id =  req.body.id
        let deleteData = 0
        request.query(`UPDATE ${CATEGORY_GROUPS} SET Active = ${deleteData}  WHERE CategoryGroupId=${id} `, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json({status:'success',message:'deleted successfully'})
        });
    },

}