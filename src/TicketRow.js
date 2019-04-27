import React from 'react'

function TableRow(props){
    const { ticket_code, name, department, priority, message, status} =props
    return(
        <tr>
            <td> { ticket_code } </td>
            <td> { name } </td>
            <td> { department } </td>
            <td> { priority } </td>
            <td> { message } </td>
            <td> { status } </td>
        </tr>
    )
}
export default TableRow;