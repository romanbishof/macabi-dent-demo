import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import images from '../../../assets/index'
import { deleteCandidate, viewCandidate } from '../../../redux/TableDataSlice';

const TableBodyRow = ({row}) => {

    const dispatch = useDispatch()

    // delete candidate from state
    const handleDeleteCandidate = (id) =>{
        
        dispatch(deleteCandidate(id))
        
    }

    // selecting the candidate to view in pop up dialog
    const handleViewCandidate = (id) => {

        dispatch(viewCandidate(id))

    }

    return (
        <TableRow 
            sx={{
                ".MuiTableCell-root": {
                    color:"#172882",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "21px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    borderBottom: "1px solid #e6e6e6"
                }
                }}>
                <TableCell align='center'>
                    <img src={images.Delete} alt="deleteIcon" onClick={()=>handleDeleteCandidate(row.idNumber)}/>
                </TableCell>
                <TableCell align='center'>
                    <img src={images.View} alt="viewIcon" onClick={() => handleViewCandidate(row.idNumber)}/>
                </TableCell>
                <TableCell align='right'>{row.rank}</TableCell>
                <TableCell align='right'>{row.status}</TableCell>
                <TableCell align='right'>{row.confirmingFactor}</TableCell>
                <TableCell align='right'>{row.createdBy}</TableCell>
                <TableCell align='right'>{row.EstablishedIn}</TableCell>
                <TableCell align='right'>{row.clinic}</TableCell>
                <TableCell align='right'>{row.role}</TableCell>
                <TableCell align='right'>{row.email}</TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.idNumber}</TableCell>
                <TableCell align='right'>{row.candidateName}</TableCell>
        </TableRow>
    );
};

export default TableBodyRow;