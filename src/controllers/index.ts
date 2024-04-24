import ShortUniqueId from "short-unique-id";
import { __env } from "../config";
import { IExpressRequestAsync } from "../types"

// Random Short url 
const genShortUrl = () =>
  new ShortUniqueId().rnd(Math.floor(Math.random() * (10 - 6 + 1)) + 6)

// creatingHistory
async function addHistory(userId: number, action: string) {
  await __env.__PRISMA_CLIENT.history.create({ data: { action, userId } })
}

// getShortUrl
export const getShortUrl: IExpressRequestAsync = async (req, res, next) => {
  const id = parseInt(req.body.id)
  if (isNaN(id)) return res.status(400).json({ msg: "User not found." })

  try {
    const user = await __env.__PRISMA_CLIENT.user.findUnique({ where: { id } })
    if (!user) return res.status(400).json({ error: "User ID is required." });
    await addHistory(user?.id as number, "access").catch(err => next(err))
    res.status(200).json({ short_url: user?.shortUrl });
  } catch (error) {
    next(error);
  }
}

// createShortUrl
export const createShortUrl: IExpressRequestAsync = async (req, res, next) => {
  const url = req.body.url

  if (!url) return res.status(400).json({ msg: "URL is required" })

  const shortUrl = genShortUrl()


  try {
    const user = await __env.__PRISMA_CLIENT.user.create({ data: { url, shortUrl } });
    await addHistory(user?.id, "create").catch(err => next(err))
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}


// deleteShortUrl
export const deleteShortUrl: IExpressRequestAsync = async (req, res, next) => {
  const id = parseInt(req.body.id)
  if (isNaN(id)) return res.status(400).json({ msg: 'user id is required' })
  try {
    await __env.__PRISMA_CLIENT.history.deleteMany({
      where: { userId: id },
    });
    const user = await __env.__PRISMA_CLIENT.user.delete({ where: { id } });
    res.status(200).json({ msg: "User and associated history deleted.", user });
  } catch (err) {
    next(err)
  }
}