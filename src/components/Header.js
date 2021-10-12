import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="space-pb--30  space-pt--30 " >
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-4 col-md-6 logo-hd">
                        <div>
                            <Link className="logo" to="/" >LOGO</Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <nav>
                            <ul className="d-flex justify-content-end">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
