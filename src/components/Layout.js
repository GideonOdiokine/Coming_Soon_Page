import React from 'react';
import Header from './Header';

import './Style.css'
import Showcase from './Showcase';

const Layout = () => {
    return (
        <div className="h-100 bg-img page_wrapper d-flex flex-column  ">
            <Header />
            <div>
                <Showcase />
            </div>

        </div>
    )
}

export default Layout
