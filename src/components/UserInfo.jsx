import React, { useState, useEffect } from 'react';

const UserInfo = props => {

    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/${props.match.params.id}`);
        let data = await res.json();
        setUserInfo(data);
    }

    
    useEffect(() => {
        // const getUserInfo = () => {
        //     fetch(`https://jsonplaceholder.typicode.com/${props.match.params.id}`)
        //     .then(res => res.json())
        //     .then(data => setUserInfo(data))
        // }
    
        getUserInfo();

    }, []);

    
    return (
        <section className="container">
            <div className="row justify-content-center m-3">
                <h3 className="m-4">User Information</h3>
            </div>
            <div className="col mb-4">
                <div className="card h-100">
                    <h5 className="card-header bg-primary text-white detail-card-header">{props.match.params.name}</h5>
                    <div className="card-body">
                        <p className="card-text">Username: {userInfo.username}</p>
                        <p className="card-text">Email: {userInfo.email}</p>
                        <p className="card-text">Address: {userInfo.address}</p>
                        <p className="card-text">Phone: {userInfo.phone}</p>
                        <p className="card-text">Website: {userInfo.website}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserInfo;