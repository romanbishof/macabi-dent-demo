import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    data: [
        {
            candidateName: 'ירון ברנשטיין',
            idNumber: '320756786',
            phone: '0508980000',
            email: 'yaron@macabi-dent.com',
            role: 'סמנכ"ל רפואה',
            clinic: 'אשדוד',
            EstablishedIn: '12.01.2021',
            createdBy: 'דגנית',
            confirmingFactor: 'רם שפר',
            status: 'ממתין',
            rank: 'ג',
        }
    ],

    dialogState: false,
    candidateView: {}
}

//our actions for reducer
const TableDataSlice = createSlice({
    name: 'TableData',
    initialState : initialValues,
    reducers: {
        addCandidate: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCandidate: (state, action) => {
            let data = state.data.filter((obj) => obj.idNumber !== action.payload);
            state.data = data;
        },
        viewCandidate: (state, action) => {
            let [candidate] = state.data.filter((obj) => obj.idNumber === action.payload)
            state.candidateView = candidate
            state.dialogState = true
        },
        dialogOpen: (state, action) => {
            state.dialogState = true
        },
        dialogClose: (state, action) => {
            state.dialogState = false
            state.candidateView = {}
        }
    },
    extraReducers: {

    }
})

export const {addCandidate,deleteCandidate,viewCandidate,dialogOpen,dialogClose} = TableDataSlice.actions

export default TableDataSlice.reducer