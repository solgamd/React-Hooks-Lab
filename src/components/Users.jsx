import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="container">
                <section className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <h1>Users</h1>
                    </div>
                    <div className="col-12">
                        <ul className="list-group">
                            {users.map(user => (
                                <li key={user.id} className="list-group-item d-flex justify-content-between">
                                {user.name}
                                <Link className="btn btn-secondary" to={`/users/${user.id}/info`} >More Info</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Users;