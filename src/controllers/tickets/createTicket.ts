import { NextFunction, Request, Response } from 'express'
import { supabase } from '../../../supabase/client'

const handler = async (req: Request, res: Response): Promise<any> => {
    const { name, email, description } = req.body;

    try {
      const { data, error } = await supabase.from('tickets').insert([
        {
          name,
          email,
          description,
        },
      ]).select();
  
      if (error) {
        console.error('Error creating ticket:', error);
        return res.status(500).json({ error: 'Failed to create ticket' });
      }
      
      return res.status(201).json(data[0]);

    } catch (err) {
      console.error('Error creating ticket:', err);
      res.status(500).json({ error: 'Failed to create ticket' });
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
