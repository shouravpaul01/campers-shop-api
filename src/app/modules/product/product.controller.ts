import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProductInto = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully product added.",
      data: result,
    });
  });
  const getAllProducts = catchAsync(async (req, res) => { 
    const result = await ProductServices.getAllProductsDB(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully retrived all products.",
      data: result,
    });
  });
  const getSingleProduct = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductDB(productId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully retrived product.",
      data: result,
    });
  });
  const updateProductInto = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const result = await ProductServices.updateProductIntoDB(productId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully product updated.",
      data: result,
    });
  });
  const updateProductStatus = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const { status } = req.query;
    const result = await ProductServices.updateProductStatusDB(
      productId,
      status as string
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      status: true,
      message: "Successfully updated product status.",
      data: result,
    });
  });
 
  export const ProductControllers = {
   createProductInto,
   getAllProducts,
   getSingleProduct,
   updateProductInto,
   updateProductStatus,
  };
  