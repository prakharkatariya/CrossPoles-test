import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },

        usersReceived: (users, action) => {
            users.list = action.payload;
            users.loading = false;
        },

        usersRequestFailed: (users, action) => {
            users.loading = false;
        },

        usersRemove: (users, action) => {
            // console.log(state.todos);
      
            const { id } = action.payload; 
            // console.log(id);
            
            users.todos = users.todos.filter(item => item.id !== id)
            
          }
    },
});

export default slice.reducer;

const { usersRequested, usersReceived, usersRequestFailed } = slice.actions;

const url = "/users";

export const loadusers = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: usersRequested.type,
            onSuccess: usersReceived.type,
            onError: usersRequestFailed.type,
        })
    );
};