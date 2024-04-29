import { __env } from "../config"

export const getHistoryData = async () => {
  return await __env.__MODEL_HISTORY.findMany()
}