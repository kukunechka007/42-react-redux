import axios from "axios";
import { createAppSlice } from "../../../app/createAppSlice";
import { FeedbackFormSliceState} from "./types";

import { isRejected } from "@reduxjs/toolkit";


const feedbackFormInitialState: FeedbackFormSliceState = {
    data: [],
    error: undefined,
    status: 'default',
}

export const feedbackFormSlice = createAppSlice ({
    name: 'FEEDBACK_FORM',

    initialState: feedbackFormInitialState,
    reducers: create=> ({
        sendData: create.asyncThunk(
            async (formData, thunkApi)=>{
                try{
                    const result = await axios.post (
                        "https://jsonplaceholder.typicode.com/posts",
                        formData
                    )
                    return
                } catch(error) {
                    thunkApi.rejectWithValue(error)
                }
            },
            {pending: (state: FeedbackFormSliceState)=>{
                state.status = 'loading'
                state.error = undefined
            },
            fulfilled: (state: FeedbackFormSliceState, action: PayloadAction<FeedbackFormData>)=>{
                state.status = 'success'
                state.data = [... state.data, action.payload]      
                },
            rejected: (state: FeedbackFormSliceState, action: any)=>{
                state.status = 'error'
                state.error = action.payload
            },
        },
        ),
    }),
    selectors: {
        returnedData: (state:FeedbackFormSliceState) = state, 
        export const feedbackFormSliceActions = feedbackFormSlice.actions
        export const feedbackFormSliceSelectors = feedbackFormSlice.selectors
    }
})