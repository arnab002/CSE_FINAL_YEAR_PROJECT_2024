import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const HeaderThree = () => {

    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);
	const [searchTrigger, setSearchTrigger] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});
    
    return (
        <Fragment>
            <header className={`header-section style-3 ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
                <div className={`header-top ${socialToggle ? "open" : ""}`}>
                    <div className="container">
                        <div className="header-top-area">
                            <div className="header-top-contact">
                                <a href="#" className="lab-btn"><span>For Your Question</span></a>
                                <a href="tel:9831084446">9831084446</a>
                                <a href="mailto:info@svist.org">info@svist.org</a>
                            </div>
                            <div className="header-top-reglog">
                                <Link to="/login" className="login">Login</Link>
                                <Link to="/signup" className="signup">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo-search-acte">
                                <div className="logo">
                                    <Link to="/"><img src="assets/images/logo/01.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="menu-area">
                                <div className="menu">
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/course">Courses</NavLink></li>
                                        {/* <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Courses</a>
                                            <ul className="lab-ul dropdown-menu">
                                                <li><NavLink to="/course">Course</NavLink></li>
                                                <li><NavLink to="/course-single">Course Details</NavLink></li>
                                            </ul>
                                        </li> */}
                                        <li><NavLink to="/instructor">Instructor</NavLink></li>
                                        {/* <li className="menu-item-has-children">
                                            <a href="/instructor" >Instructor</a>
                                            <ul className="lab-ul dropdown-menu">
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/team">Team</NavLink></li>
                                                <li><NavLink to="/instructor">Instructor</NavLink></li>
                                                <li><NavLink to="/search-page">Search Page</NavLink></li>
                                                <li><NavLink to="/search-none">Search None</NavLink></li>
                                                <li><NavLink to="/404">404</NavLink></li>
                                            </ul>
                                        </li> */}
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>

                                <div className="search-icon" onClick={() => setSearchTrigger(!searchTrigger)}>
                                    <i className="icofont-search"></i>
                                </div>

                                <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`menu-search-form ${searchTrigger ? "open" : ""}`}>
                <div className="search-close" onClick={() => setSearchTrigger(!searchTrigger)}></div>
                <form>
                    <input type="text" name="search" placeholder="Search here..." />
                    <button type="submit"><i className="icofont-search"></i></button>
                </form>
            </div>
        </Fragment>
    );
}
 
export default HeaderThree;

