import React from 'react';

import './Navbar.css';


import { Link } from 'react-router-dom';


const Navbar = () => {
return (
<nav>
<ul>
    <li>
    <Link to = '/'>Home</Link>
</li>
<li>
    <Link to = '/Signup'>SignUp</Link>
</li>
<li>
    <Link to = '/Login'>Login</Link>
</li>

</ul>
</nav>

);
}
export default Navbar;