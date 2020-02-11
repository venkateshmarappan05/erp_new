import express from 'express';
import product from '../controller/product';

let router = express.Router()

// get List 
router.route('/itemsList').get(product.itemList);
router.route('/itemSubList').get(product.itemSubFamilyList);
router.route('/categoryList').get(product.categoryList);
router.route('/categoryGroups').get(product.categoryGroupsList);

//create data 

router.route('/createItems').post(product.createItems);
router.route('/createSubItems').post(product.createSubItems);
router.route('/CreateCategory').post(product.CreateCategory);
router.route('/CreateCategoryGroup').post(product.CreateCategoryGroup);

// edit data
router.route('/itemEdit').post(product.itemEdit)

// delete data 
router.route('/deleteItems').post(product.itemDelete)
router.route('/itemSubFamilyDelete').post(product.itemSubFamilyDelete)
router.route('/categoryDelete').post(product.categoryDelete)
router.route('/categoryGroupsDelete').post(product.categoryGroupsDelete)

module.exports=router;