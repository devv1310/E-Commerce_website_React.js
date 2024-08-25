import {useSelector, useDispatch} from "react-redux";
import {addQTY, removeQTY, removeItem} from "./cartSlice";
import { useNavigate } from "react-router-dom";
const CartItem=()=>{
    const cartData= useSelector((state)=>state.mycart.cart);
    const dispatch= useDispatch();
    const mynav= useNavigate();
    let netAmount=0;
     const ans=cartData.map((key)=>{
            netAmount+=key.price*key.qnty;
           return(
            <>
              <tr>
                <td> <img src={"images/"+key.image} width="100" height="80" /> </td>
                <td> {key.name} </td> 
                <td> {key.offer} </td>
                <td> {key.price} </td>
                <td> 
                 <button onClick={()=>{dispatch(addQTY({id:key.id}))}}> + </button> 
                <span style={{color:"blue", fontSize:"20px", fontWeight:"bold"}}>  {key.qnty} </span>  
                 <button onClick={()=>{dispatch(removeQTY({id:key.id}))}}> - </button>  
                  
                </td>
                <td>  
                  {key.price*key.qnty}   
                  
                </td>
                <td>  

                 <button onClick={()=>{dispatch(removeItem(key.id))}}>Remove</button>   
                  
                </td>
              </tr>
              <tr align="left">
                        <th colspan="7" bgcolor="lighblue" height="1">
                         </th>   

                    </tr>
            </>
           )
     })


const BuyNow=()=>{
  mynav("/buynow");
}

    return(
        <>
         <br/>
          <h1> Our WishList Products Item </h1>
                 <hr color="red" />
                 <table width="90%" align="center" >
                    <tr align="left">
                        <th> </th>
                        <th> Products Name</th>
                        <th> Brand </th>
                        <th> Price per Item</th>
                        <th> Quantity </th>
                        <th> Total Amount</th>
                        <th> </th>
                    </tr>
                    {ans}
                    <tr align="left">
                        <th> </th>
                        <th></th>
                        <th> </th>
                        <th> </th>
                        <th> Grand Total  </th>
                        <th>  {netAmount} </th>
                    </tr>
                 </table>

              <br/> <br/>
             <center>
             <button style={{backgroundColor:"red" , color:"white", 
             padding:"10px", width:"150px", fontSize:"20px", fontWeight:"bold"}}
             
             onClick={BuyNow}> Buy Now </button>
             </center>
             <br/>
             <br/>
                
        </>
    )
}
export default CartItem;