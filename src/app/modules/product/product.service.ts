import { QueryBuilder } from "../../builder/QueryBuilder";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
  };
  const getAllProductsDB = async (query: Record<string, unknown>) => {
   const searchableFields=["name"]
    const mainQuery = new QueryBuilder(Product.find({}), query).search(
      searchableFields
    );
  
    const totalPages = (await mainQuery.totalPages()).totalQuery;
    const productQuery = mainQuery.paginate();
    const products = await productQuery.modelQuery;
  
    const result = { data: products, totalPages: totalPages };
    return result;
  };
  const getSingleProductDB = async (
    productId: string
  ) => {
      const result = await Product.findById(productId);
      return result;
  };
  const updateProductIntoDB = async (
    productId: string,
    payload: Partial<TProduct>
  ) => {
    const result = await Product.findByIdAndUpdate(productId, payload, {
      new: true,
    });
    return result;
  };
  const updateProductStatusDB = async (productId: string, status: string) => {
    const result = await Product.findByIdAndUpdate(
      productId,
      { status: status },
      { new: true }
    );
    return result;
  };
  
  export const ProductServices = {
    createProductIntoDB,
    getAllProductsDB,
    getSingleProductDB,
    updateProductIntoDB,
    updateProductStatusDB
  };
  