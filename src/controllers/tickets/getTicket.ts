import { NextFunction, Request, Response } from 'express'
import { supabase } from '../../../supabase/client'


const handler = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params

    try {

      const { data, error } = await supabase.from('tickets').select('*').eq('id', id).single();

      if (error) {
        console.error('Error retrieving ticket:', error);
        return res.status(500).json({ error: 'Failed to retrieve ticket' });
      }
      
        return res.status(201).json(data);

    } catch (err) {
      console.error('Error retrieving ticket:', err);
      res.status(500).json({ error: 'Failed to retrieve ticket' });
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
