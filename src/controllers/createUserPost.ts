import { IExpressRequestAsync } from "../types";

export const createUserPost: IExpressRequestAsync = async (req, res) => {
  res.send('Hello World');
}