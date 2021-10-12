import React from 'react'
// import { Link } from 'react-router-dom';
import Logo from '../images/logo-14.png'

const Header = () => {
    return (
        <header className="space-pb--30  space-pt--30 " >
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div>
                            <a href="#" >
                                <img src={Logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
