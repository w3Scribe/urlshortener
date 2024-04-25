// import ShortUniqueId from "short-unique-id";
import { __env } from "../config";
import { IExpressRequestAsync } from "../types"

// Random Short url 
// const genShortUrl = () =>
//   new ShortUniqueId().rnd(Math.floor(Math.random() * (10 - 6 + 1)) + 6)

// creatingHistory


// getShortUrl
export const Home: IExpressRequestAsync = async (req, res, next) => {
  try {
    res.render('home', { title: 'Home' })
  } catch (err) {
    next(err)
  }   
}

// createShortUrl
// deleteShortUrl
