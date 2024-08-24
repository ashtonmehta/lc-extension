import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProblemState {
    name: string;
}

const initialState: ProblemState = {
    name: ''
}

const problemSlice = createSlice({
    name: 'problem',
    initialState,
    reducers: {
        updateName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        }
    }
})

export const { updateName } = problemSlice.actions;
export default problemSlice.reducer;