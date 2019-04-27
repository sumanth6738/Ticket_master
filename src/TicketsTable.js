import React from 'react'
import TicketRow from './TicketRow'
// function component
// return jsx

function TicketsTable(props){
    const { tickets }= props
    return(
        <div>
         
            <table>
                <thead>
                    <tr>
                        <th>Ticket Code</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Priority</th>   
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    { tickets.map(ticket => {
                        return (
                        <TicketRow 
                        key={ticket.ticket_code}
                        {...ticket}/>
                        )
                    })}
                </tbody>
             </table>
       </div>
    )
}
export default TicketsTable;