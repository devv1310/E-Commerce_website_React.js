import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Layout = () => {
    let cartItemNo = 0;
    const cartdata = useSelector((state) => state.mycart.cart);
    if (cartdata.length >= 1) {
        cartItemNo = cartdata.length;
    }
    return (
        <>
            <div id="wrapper">
                <div id="header">
                    <div id="logo">
                        FoodMntr
                    </div>
                    <div id="topmenu">
                        <ul>
                            <li>
                                <Link to="home"> HOME</Link>  </li>
                            <li> OUR MENU </li>
                            <li> OFFER </li>
                            <li> <Link to="search">SEARCH</Link>  </li>
                            <li> CONTACT</li>
                            <li>
                                {cartItemNo}
                                <Link to="cartitem">
                                    <FaShoppingCart style={{ fontSize: "25px" }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
                <div id="footer">
                    <div className="side1">
                        <h2>Address</h2>
                        <h3>Bitten Market Charimle Kolar Road Bhopal(M.P) Pin:-462016</h3>
                    </div>
                    <div className="hike">
                        <h3><MdHelp /> Help Center</h3>
                        <h3><MdEmail /> Email US</h3>
                        <h3><FaPhone /> 805-345-2319</h3>
                    </div>
                    <div className="logo1">
                        <FaSquareFacebook style={{ alignContent: "center", alignItems: "center", boxSizing: "border-box", color: "rgb(58,58,58)", cursor: "pointer", display: "inline-block", flexWrap: "wrap", fontFamily: "Source Sans Pro,sans-serif", fontSize: "20px", fontStyle: "normal", fontWeight: "700", height: "44px", justifyContent: "center", lineHeight: "17px", marginLeft: "0px", marginRight: "15px", overflowWrap: "anywhere", textAlign: "right", textDecorationColor: "rgb(58,58,58)", textDecorationLine: "none", textDecorationStyle: "solid", textDecorationThickness: "auto", textSizeAdjust: "100%", verticalAlign: "middle", width: "44px", weblitfontSmoothing: "antialiased" }} />
                        <FaInstagram style={{ alignContent: "center", alignItems: "center", boxSizing: "border-box", color: "rgb(58,58,58)", cursor: "pointer", display: "inline-block", flexWrap: "wrap", fontFamily: "Source Sans Pro,sans-serif", fontSize: "20px", fontStyle: "normal", fontWeight: "700", height: "44px", justifyContent: "center", lineHeight: "17px", marginLeft: "0px", marginRight: "15px", overflowWrap: "anywhere", textAlign: "right", textDecorationColor: "rgb(58,58,58)", textDecorationLine: "none", textDecorationStyle: "solid", textDecorationThickness: "auto", textSizeAdjust: "100%", verticalAlign: "middle", width: "44px", weblitfontSmoothing: "antialiased" }} />
                        <FaTwitter style={{ alignContent: "center", alignItems: "center", boxSizing: "border-box", color: "rgb(58,58,58)", cursor: "pointer", display: "inline-block", flexWrap: "wrap", fontFamily: "Source Sans Pro,sans-serif", fontSize: "20px", fontStyle: "normal", fontWeight: "700", height: "44px", justifyContent: "center", lineHeight: "17px", marginLeft: "0px", marginRight: "15px", overflowWrap: "anywhere", textAlign: "right", textDecorationColor: "rgb(58,58,58)", textDecorationLine: "none", textDecorationStyle: "solid", textDecorationThickness: "auto", textSizeAdjust: "100%", verticalAlign: "middle", width: "44px", weblitfontSmoothing: "antialiased" }} />
                    </div>
                </div>
                <div className="copy"><center>Copyright © 2024 FoodMntr Restaurant</center></div>
            </div>

        </>
    )
}

export default Layout;