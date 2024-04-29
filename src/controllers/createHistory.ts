import { __env } from "../config";
import { ICreateHistory } from "../types";

export const createHistory: ICreateHistory = async (user, Action) => {
  const { id: userId, url, shortURL } = user
  await __env.__MODEL_HISTORY.create({
    data: {
      action: Action,
      shortURL,
      url,
      userId
    }
  })
}