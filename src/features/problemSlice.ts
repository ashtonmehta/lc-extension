import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProblemState {
    name: string;
    isValidPage: boolean;
}

const initialState: ProblemState = {
    name: 'blank',
    isValidPage: true
}

const problemSlice = createSlice({
    name: 'problem',
    initialState,
    reducers: {
        updateName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        updateValidPage(state, action: PayloadAction<boolean>) {
            state.isValidPage = action.payload;
        }
    }
})

export const { updateName, updateValidPage } = problemSlice.actions;
export default problemSlice.reducer;