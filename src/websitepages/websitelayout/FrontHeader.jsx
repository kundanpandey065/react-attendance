// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


const FrontHeader = () => {

    return(
        <>

    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link smooth  to="/"> Home </Link></li>
                <li><Link smooth  to="#about"> About </Link></li>
                <li><Link smooth  to="#features"> Features </Link></li>                
                <li><Link smooth  to="/version-update"> Version Update </Link></li>
                <li><Link smooth  to="/contact"> Contact Us </Link></li>                
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">AMBAR</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link smooth  to="/"> Home </Link></li>
                <li><Link smooth  to="#about"> About </Link></li>
                <li><Link smooth  to="#features"> Features </Link></li>                
                <li><Link smooth  to="/version-update"> Version Update </Link></li>
                <li><Link smooth  to="/contact"> Contact Us </Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Feedback</a>
        </div>
    </div>

        </>
    )
}


export default FrontHeader;