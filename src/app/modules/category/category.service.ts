import httpStatus from "http-status";
import { Category } from "./category.model";
import { TCategory } from "./category.interface";

const createCategoryIntoDB = async (payload: TCategory) => {
    const result = await Category.create(payload);
    return result;
  };
  const getAllCategoriesDB = async (query: Record<string, unknown>) => {
    const result = await Category.find({});
    return result;
  };
  const getSingleCategoryDB = async (categoryId: string) => {
    const result = await Category.findById(categoryId);
    return result;
  };
  const updateCategoryIntoDB = async (categoryId: string, payload: Partial<TCategory>) => {
    const result = await Category.findByIdAndUpdate(categoryId, payload, {
      new: true,
    });
    return result;
  };
  const updateCategoryStatusDB = async (categoryId: string, status: string) => {
    const result = await Category.findByIdAndUpdate(
      categoryId,
      { status: status },
      { new: true }
    );
    return result;
  };
  const getAllActiveCategoriesDB = async () => {
    const result = await Category.find({status:true})
    return result;
  };
  export const CategoryServices = {
    createCategoryIntoDB,
    getAllCategoriesDB,
    getSingleCategoryDB,
    updateCategoryIntoDB,
    updateCategoryStatusDB,
    getAllActiveCategoriesDB
  };
  