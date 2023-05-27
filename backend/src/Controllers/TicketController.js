import Ticket from '../Models/'
import TicketComment from '../Models/TicketComment.js'



export const addTicket = async (req, res) => {
    let {title, user} = req.body;


    Ticket.create({
        title,
        user,
    }).then(data => {
        res.json(data)
    }).catch( err => {
        res.json(err);
   })

}


export const addTicketComment = async (req, res) => {
    let {content, ticketId, userId} = req.body;


    TicketComment.create({
        content,
        ticketId,
        userId,
    }).then(data => {
        res.json(data)
    }).catch( err => {
        res.json(err);
   })

}
