import React from 'react'

import './menu.css'

const Menu = () => {
    return (
            <div className="col-lg-6">
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Payment</a></li>
                        <li><a href="/">Shipping</a></li>
                     </ul>
                </div>
            </div>
    )
}

export default Menu