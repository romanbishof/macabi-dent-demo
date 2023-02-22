import { configureStore } from "@reduxjs/toolkit";
import TableData_reducer from './TableDataSlice'

export default configureStore({
    reducer: {
        TableDate: TableData_reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
})