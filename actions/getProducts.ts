import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> =>
  (
    await axios.get(
      qs.stringifyUrl({
        url: URL,
        query: {
          colorId: query.colorId,
          sizeId: query.sizeId,
          categoryId: query.categoryId,
          isFeatured: query.isFeatured,
        },
      })
    )
  ).data;
