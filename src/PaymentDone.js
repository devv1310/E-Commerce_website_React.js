import LoaderComp from "./Loader";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {cartEmpty} from "./cartSlice";
const PaymentDone=()=>{
    const [isLoading, setIsLoading]= useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
         setTimeout(()=>{
            setIsLoading(false);
         }, 4000);

         dispatch(cartEmpty());
    }, []);
    
    return(
        <>
        
        <br />
        <br/>
        <br/>
 
     {  isLoading ?  <div style={{margin:"auto", width:"200px"}}>
        <h1 style={{color:"green"}}>  Your Payment Being Process </h1>
        <LoaderComp/> 
        </div>   : (

         
<h1 align="center"> Your Payment Succesfully Done <br/> 
Your Product will we send within 6 to 7 working Days</h1>

     ) }
         
         
        
        
        </>
    )
}

export default PaymentDone;