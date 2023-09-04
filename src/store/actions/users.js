import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from '../../apiUrl'

const read_users = createAsyncThunk(
    'read_users',
    async() => {
        try {
            let users = await axios(apiUrl + 'users');
            console.log(users)
            return {
                users: users.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }
    }
)

const users_actions = { read_users }
export default users_actions