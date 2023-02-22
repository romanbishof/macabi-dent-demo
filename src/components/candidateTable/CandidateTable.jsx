import { TableContainer ,Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './CandidateTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCandidate, viewCandidate } from '../../redux/TableDataSlice';
import TableHeadRow from './tableHeadRow/TableHeadRow';
import TableBodyRow from './tableBodyRow/TableBodyRow';


const CandidateTable = ({searchFilter}) => {

    const state = useSelector((state) => state.TableDate.data)
    
    const [tableData, setTableData] = useState(state)
    
    useEffect(()=>{
        setTableData(state)
    },[state])

    return (
        <div className='Table'>
            <TableContainer className='Table-container'>
                <Table stickyHeader>
                    <TableHead>
                        <TableHeadRow 
                            delete={`מחק`}
                            view={`צפייה`}
                            rank={`דרגה`}
                            status={`סטטוס`}
                            confirmingFactor={`גורם מאשר`}
                            createdBy={`היקים`}
                            establishedIn={`הוקם`}
                            clinic={`מרפאה`}
                            role={`תפקיד`}
                            email={`כתובת מייל`}
                            phone={`טלפון נייד`}
                            id={`תעודת זאות`}
                            candidate={`מועמד`}
                            />
                    </TableHead>
                    <TableBody>
                        {
                            // checking if data table is empty array
                            // and the filtering by useres input to
                            // search for user
                            tableData?.filter((row) => {
                                
                                if (!isNaN(+searchFilter)) {
                                    return row.idNumber.includes(searchFilter)
                                }
                                else{
                                    return row.candidateName.includes(searchFilter)
                                }
                            }).map((row) => {
                                
                                return <TableBodyRow key={row.idNumber} row={row}/>

                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CandidateTable;