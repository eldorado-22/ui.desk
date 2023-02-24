import React, {useEffect, useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {AiOutlineClose, AiOutlineShoppingCart} from "react-icons/ai";
// import {hover} from "@testing-library/user-event/dist/hover";
import {Link} from "react-router-dom"

function Header() {
    const [scroll, setScroll] = useState(0)
    const [search, setSearch] = useState(false)


    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])


    return (
        <header id='header' style={{background: scroll > 50 ? '#5FB848' : ''}}>
            <div className='container'>
                <div className='header'>
                    <div className='header--nav'>
                        <Link to={"/"}>
                            <h1>UI.desk</h1>
                        </Link>
                        <nav className='header--nav__hac'>
                            <Link to={"/"}>
                                <a href='#'>Home</a>
                            </Link>
                            <Link to={"about"}>
                                <a href='#'>About</a>
                            </Link>
                            <Link to={"subscribe"}>
                                <a href='#'>Contact</a>
                            </Link>
                            <Link to={"testimonials"}>
                                <a href='#'>Testimonials</a>
                            </Link>
                        </nav>
                    </div>

                    <div className='header--shop'>
                        <div onClick={() => setSearch(!search)} className='search-btn header--shop__search'
                             style={{transform: search ? '' : 'rotate(360deg)'}}>
                            {
                                search ? <AiOutlineClose/> : <CiSearch/>
                            }
                        </div>
                        <Link to={"basket"}>
                            <nav className="header--shop__basket">
                                <a href="#">
                                    <AiOutlineShoppingCart/>
                                </a>
                            </nav>
                        </Link>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>

            <div className='search' style={{
                bottom: search ? '' : '300px'
            }}>
                <input type="text" placeholder="Search"/>
            </div>
        </header>
    )
}

export default Header