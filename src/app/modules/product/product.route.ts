import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";
import { ProductValidations } from "./product.validation";

const router = express.Router();

router.post(
    "/create-product",
    validateRequest(ProductValidations.createProductValidationSchema),
    ProductControllers.createProductInto
  );
  router.get('/',ProductControllers.getAllProducts)
  router.get('/single-product/:productId',ProductControllers.getSingleProduct)
  router.patch('/:productId',ProductControllers.updateProductInto)
  router.patch('/update-status/:productId',ProductControllers.updateProductStatus)
 
  
  export const ProductRoutes=router