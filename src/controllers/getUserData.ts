import { IExpressRequestAsync } from "../types/index"


export const getUserData: IExpressRequestAsync = async (req, res) => {
  res.render("home")
}