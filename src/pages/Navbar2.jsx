import React from 'react';

import './Navbar.css';




const Navbar2 = () => {
return (
<nav>
<ul>
<li className="right-align">
<div className="user-profile">
<img src="profile-photo.jpg" alt="Profile Photo" />
<span className="username">John Doe</span>
</div>
</li>
</ul>
</nav>

);
}
export default Navbar2;