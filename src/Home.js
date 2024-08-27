import banner from "./images/banner.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";


const Home = () => {
    const [mydata, setMydata] = useState([]);

    const dispatch = useDispatch();


    const loadData = () => {
        let url = "http://localhost:4000/products/";
        axios.get(url).then((res) => {
            setMydata(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, []);


    const productAns = mydata.map((key) => {
        return (
            <>
                <div className="proitems">
                    <img src={"./images/" + key.image} width="250" height="200" />
                    <h1> Name :  {key.name} </h1>
                    <h2> Price :  {key.price} </h2>
                    <h3>{key.offer}</h3>
                    <button className="btn2" onClick={() => { dispatch(addtoCart({ id: key.id, name: key.name, price: key.price, image: key.image, })) }}> Add </button>
                </div>
            </>
        )
    });
    return (
        <>

            <div id="banner">
                <h1 className="storename">FoodMntr</h1>
                <button className="btn1">OrderNow <FaArrowRight /></button>
                <img src={banner} width="100%" height="850"/>
            </div>
            <div id="content">
                <h3 className="Ourmenu"> OUR MENU</h3>
                <h1 className="Ourmenu1">Enjoy & Order</h1>
                <div id="products">
                    {productAns}
                </div>
            </div>

        </>
    )
}

export default Home;