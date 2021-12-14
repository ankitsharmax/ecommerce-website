import React from "react";

export default function Table(props) {
    const { orderData } = props;
    console.log(orderData);
    console.log("Table");
    return (
      <>
        <h2>My Orders</h2>


        <table className="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price (Rs.)</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Total Price</th>
            </tr>
        </thead>
         <tbody>
           {
            orderData.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>


      </>
    );
  }