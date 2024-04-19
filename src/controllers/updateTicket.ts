import { NextFunction, Request, Response } from 'express'
import { supabase } from '../../supabase/client'


const handler = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const { status } = req.body

    try {

      const { data, error } = await supabase.from('tickets').update({ status: status }).eq('id', id).select('*')

      if (error) {
        console.error('Error update ticket:', error);
        return res.status(500).json({ error: 'Failed to update ticket' });
      }
        return res.status(201).json(data[0]);

    } catch (err) {
      console.error('Error updating ticket:', err);
      res.status(500).json({ error: 'Failed to updating ticket' });
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