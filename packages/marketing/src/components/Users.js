import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../action-creators";
import { Link } from "react-router-dom";


const Users = () => {

    const usersState = useSelector(store => store.users);
    const { users, loading } = usersState;
    const dispatch = useDispatch();

    const addDummyUser = () => dispatch(addUser({id: `${Math.random()}`, name: `user-${Math.random()}`}))
    return(
        <div>
            <h3>Users</h3>
            <br />
            <Link to="/">home</Link>
            <button onClick={addDummyUser}>Add User</button>
            {loading && <h3>Fetching users...!!</h3>}
            {
                users.length > 0 ? (
                    <ul>
                    {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
                ): <p>No users found!</p>
            }
            
        </div>
    )
}

export default Users;