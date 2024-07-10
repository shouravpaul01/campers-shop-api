import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

const createCategoryInto = catchAsync(async (req, res) => {
    const result = await CategoryServices.createCategoryIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully category added.",
      data: result,
    });
  });
  const getAllCategories = catchAsync(async (req, res) => { 
    const result = await CategoryServices.getAllCategoriesDB(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully retrived all categories.",
      data: result,
    });
  });
  const getSingleCategory = catchAsync(async (req, res) => {
    console.log('single')
    const { categoryId } = req.params;
    const result = await CategoryServices.getSingleCategoryDB(categoryId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully retrived category.",
      data: result,
    });
  });
  const updateCategoryInto = catchAsync(async (req, res) => {
    const { categoryId } = req.params;
    const result = await CategoryServices.updateCategoryIntoDB(categoryId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully category updated.",
      data: result,
    });
  });
  const updateCategoryStatus = catchAsync(async (req, res) => {
    const { categoryId } = req.params;
    const { status } = req.query;
    const result = await CategoryServices.updateCategoryStatusDB(
      categoryId,
      status as string
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully updated brand status.",
      data: result,
    });
  });
  const getAllActiveCategories = catchAsync(async (req, res) => {
    const result = await CategoryServices.getAllActiveCategoriesDB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully Get all active categories",
      data: result,
    });
  });
  export const CategoryControllers = {
   createCategoryInto,
   getAllCategories,
   getSingleCategory,
   updateCategoryInto,
   updateCategoryStatus,
   getAllActiveCategories
  };
  