import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="row justify-content-center">
                <Link className="home-link btn btn-success m-3" to="/">Home</Link>
                <Link className="home-link btn btn-success m-3" to="/users">Users</Link>

        </section>
      );
}
 
export default Navbar;