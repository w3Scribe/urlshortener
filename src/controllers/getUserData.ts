import createHttpError from "http-errors";
import { IExpressRequestAsync } from "../types";
import { getHistoryData } from "./fetchUrlData";

export const getUserData: IExpressRequestAsync = async (req, res, next) => {
  try {
    const data = await getHistoryData()
    res.status(202).render('home', { data })
  } catch {
    const error = createHttpError(400, "something is wrong");
    next(error)
  }
}