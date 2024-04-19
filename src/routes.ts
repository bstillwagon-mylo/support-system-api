import { Router } from 'express'; 
import createTicket from './controllers/createTicket';
import getTickets from './controllers/getTickets';
import getTicket from './controllers/getTicket';
import updateTicket from './controllers/updateTicket';

export const defaultRoute = Router();

defaultRoute.get('/heath', (req, res) => {
  res.send("Available");
});

defaultRoute.post('/api/tickets', createTicket)
defaultRoute.get('/api/tickets', getTickets)
defaultRoute.get('/api/tickets/:id', getTicket)
defaultRoute.patch('/api/tickets/:id', updateTicket)