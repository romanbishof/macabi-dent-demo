import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const TableHeadRow = (props) => {
    
    return (
        <TableRow sx={{
                ".MuiTableCell-root": {
                    color:"#172882",
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "21px",
                    textAlign: "right",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    borderBottom: "1px solid #e6e6e6"
                }
                }}>
            <TableCell sx={{minWidth: '20px'}}>{props.delete}</TableCell>
            <TableCell sx={{minWidth: '10px'}}>{props.view}</TableCell>
            <TableCell sx={{minWidth: '21px'}}>{props.rank}</TableCell>
            <TableCell sx={{minWidth: '44px'}}>{props.status}</TableCell>
            <TableCell sx={{minWidth: '67px'}}>{props.confirmingFactor}</TableCell>
            <TableCell sx={{minWidth: '75px'}}>{props.createdBy}</TableCell>
            <TableCell sx={{minWidth: '66px'}}>{props.establishedIn}</TableCell>
            <TableCell sx={{minWidth: '54px'}}>{props.clinic}</TableCell>
            <TableCell sx={{minWidth: '91px'}}>{props.role}</TableCell>
            <TableCell sx={{minWidth: '182px'}}>{props.email}</TableCell>
            <TableCell sx={{minWidth: '86px'}}>{props.phone}</TableCell>
            <TableCell sx={{minWidth: '78px'}}>{props.id}</TableCell>
            <TableCell sx={{minWidth: '77px'}}>{props.candidate}</TableCell>
        </TableRow>
    );
};

export default TableHeadRow;