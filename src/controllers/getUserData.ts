import { IExpressRequestAsync } from "../types";

export const getUserData: IExpressRequestAsync = async (req, res) => {
  res.render("home")
}