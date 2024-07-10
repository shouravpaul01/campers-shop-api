import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { CategoryValidations } from "./category.validation";
import { CategoryControllers } from "./category.controller";


const router = express.Router();

router.post(
  "/create-category",
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategoryInto
);
router.get('/',CategoryControllers.getAllCategories)
router.get('/single-category/:categoryId',CategoryControllers.getSingleCategory)
router.patch('/:categoryId',CategoryControllers.updateCategoryInto)
router.patch('/update-status/:categoryId',CategoryControllers.updateCategoryStatus)
router.get('/active-Categories',CategoryControllers.getAllActiveCategories)

export const CategoryRoutes=router