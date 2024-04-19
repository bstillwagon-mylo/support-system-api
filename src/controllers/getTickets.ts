import { NextFunction, Request, Response } from 'express'
import { supabase } from '../../supabase/client'


const handler = async (req: Request, res: Response): Promise<any> => {
    try {
      const { data, error } = await supabase.from('tickets').select('*')
      if (error) {
        console.error('Error retrieving tickets:', error);
        return res.status(500).json({ error: 'Failed to retrieve tickets' });
      }
      
        return res.status(201).json(data);

    } catch (err) {
      console.error('Error retrieving tickets:', err);
      res.status(500).json({ error: 'Failed to retrieve tickets' });
    }
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
