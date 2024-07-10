import { z } from "zod";

const createProductValidationSchema= z.object({
  body:z.object({
    name: z.string({required_error:"The field is required."}).trim(),
    category: z.string({required_error:"The field is required."}),
    price: z.number({required_error:"The field is required.",invalid_type_error:"Price must be a positive number"}).min(0, "Price must be a positive number"),
    stockQuantity: z.number({invalid_type_error:"Stock quantity  must be a positive number"}).min(0, "Stock quantity must be a positive number").default(0),
    description: z.string({required_error:"The field is required."}),
    rating: z.number({invalid_type_error:"Rating must be a positive number"}).min(0).max(5).optional(),
  })
  });
  const updateProductValidationSchema= z.object({
    body:z.object({
      name: z.string().trim(),
      category: z.string({required_error:"The field is required."}),
      price: z.number({required_error:"The field is required.",invalid_type_error:"Price must be a positive number"}).min(0, "Price must be a positive number"),
      stockQuantity: z.number({invalid_type_error:"Stock quantity  must be a positive number"}).min(0, "Stock quantity must be a positive number").default(0),
      description: z.string({required_error:"The field is required."}),
      rating: z.number({invalid_type_error:"Rating must be a positive number"}).min(0).max(5).optional(),
    })
    }).optional();

    export const ProductValidations= {
        createProductValidationSchema,
        updateProductValidationSchema
    }
  