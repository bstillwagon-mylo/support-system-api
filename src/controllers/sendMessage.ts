import { NextFunction, Request, Response } from 'express'

const handler = async (req: Request, res: Response): Promise<any> => {
    const { message } = req.body;

    return res.status(201).json('Message sent');

}

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await handler(req, res)
  } catch (error) {
    next(error)
  }
}
