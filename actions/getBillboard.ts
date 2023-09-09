import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> =>
  id ? (await axios.get(`${URL}/${id}`)).data : (await axios.get(URL)).data[0];
