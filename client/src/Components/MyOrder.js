import React, {useEffect, useState} from "react";
import Table from "./Table";

const MyOrder = () => {

    const [orderData, setOrderData] = useState({});
    
    const callMyOrderPage = async () => {

        try{

            console.log("Fetch all myorder data start!");
            const emailid = sessionStorage.email.slice(1,-1);

            const res = await fetch("/myorderdata",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({
                emailid
            })
            });

            const data = await res.json();
            setOrderData(data.orderrecords);

            if (!data) {
                console.log("No order Placed till now.")
                alert("No Order Placed till Now!");
            } else {
                console.log("Order data received");
                // console.log(data.orderrecords.length);
                // console.log(data.orderrecords);
                
            } 


        } catch(err){
            console.log(err);
        }
        
          
    }

    useEffect(() => {
        callMyOrderPage();
    }, []);

    var results = [];

    for (var i=0; i<orderData.length;i++){

        results.push([orderData[i].id, orderData[i].name,orderData[i].price, orderData[i].qty, orderData[i].totalprice]);
    }


    // console.log(orderData);
    console.log(results);

    return (
        <>
            <div>
            <Table orderData={results}/>
            
        </div>
        </>
    )

}

export default MyOrder;