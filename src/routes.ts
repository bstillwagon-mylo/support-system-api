import { Router } from 'express'; 
import createTicket from './controllers/tickets/createTicket';
import getTickets from './controllers/tickets/getTickets';
import getTicket from './controllers/tickets/getTicket';
import updateTicket from './controllers/tickets/updateTicket';
import sendMessage from './controllers/sendMessage';

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
  res.send("Available");
});

defaultRoute.post('/api/tickets', createTicket)
defaultRoute.get('/api/tickets', getTickets)
defaultRoute.get('/api/tickets/:id', getTicket)
defaultRoute.patch('/api/tickets/:id', updateTicket)

defaultRoute.post('/api/sendMessage', sendMessage)