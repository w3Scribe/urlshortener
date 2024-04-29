import ShortUniqueId from "short-unique-id"
import { IExpressRequestAsync } from "../types/index"
import { __env } from "../config";
import createHttpError from "http-errors";
import { getHistoryData } from "./fetchUrlData";
import { createHistory } from "./createHistory";

const shortID = () => {
  const randomInt = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  return new ShortUniqueId().rnd(randomInt)
}

export const createUserURL: IExpressRequestAsync = async (req, res) => {
  const randomInt = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  return new ShortUniqueId().rnd(randomInt)
}

export const getUserData: IExpressRequestAsync = async (req, res, next) => {
  const { url } = req.body

  // Ensure that the URL is provided in the request body and is a valid URL
  if (!url) {
    const error = createHttpError(400, "URL is required");
    next(error)
  } else {
    try {
      new URL(url)
    } catch {
      const error = createHttpError(400, "Valid URL is required");
      next(error)
    }
  }

  try {
    // creating the short URL
    const user = await __env.__MODEL_USER.create({
      data: {
        shortURL: shortID(), url
      }
    });

    await createHistory(user, req.method).catch(err => next(err))

    const data = await getHistoryData()
    res.status(202).render('home', { data })

  } catch (err) {
    next(err)
  }
}