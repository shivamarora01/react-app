import {createSlice , nanoid} from '@reduxjs/toolkit';

//intial state
const initialState = {
   items: [{ id: 1, text: 'Shoes', location:'In Canteen', colour: 'Red' }]
};


export const itemSlice = createSlice({
    name:"item",
    initialState,
    reducers:{
        additem: (state,action) => {
            const item = {
                id:nanoid(),
                text:action.payload.input,
                location: action.payload.input2,
                colour: action.payload.input3
            }
            state.items.push(item)
        }
    }
})
export const {additem} = itemSlice.actions
export default itemSlice.reducer