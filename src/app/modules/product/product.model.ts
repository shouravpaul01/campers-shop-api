import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { generateSlug } from "../../utils/generateSlug";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    status:{
        type:Boolean,
        default:true
    }
  },
  {
    timestamps: true,
  }
);

// Middleware to check product already exists.
productSchema.pre("save", async function (next) {
  const isProductExists = await Product.findOne({ name: this.name });
  if (isProductExists) {
    throw new AppError(httpStatus.NOT_FOUND, "name", "Product already exists.");
  }
  //Create slug
  this.slug=generateSlug(this.name)
  next();
});

export const Product = model("Product", productSchema);
