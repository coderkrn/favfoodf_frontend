import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'


export default function Cart() {
    let data = useCart();
    console.log(data)
    let dispatch = useDispatchCart();
    // if (data.length === 0) {
    //     <div className='m-5 w-100 text-center fs-3'>The Cart Is Empty!</div>
    //     console.log("The length of data is 0")
    // }


    const handleCheckOut = async () => {
        // let userEmail = localStorage.getItem("userEmail");
        // let response = await fetch('http://localhost:5000/api/orderData', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         order_data: data,
        //         email: userEmail,
        //         Order_date: new Date().toDateString
        //     })
        // })
        // console.log("Order response", response)
        // if (response.status === 200) {
        //     dispatch({ type: "DROP" })
        // }
        dispatch({ type: "DROP" })
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (

        <>
            {(data.length === 0) ?
                <div className=' w-100 text-center fs-3 text-white'>The Cart Is Empty!</div> :


                <div className='container m-auto mt-5 table-responsive-sm table-responsive-md'>
                    <table className="table table-hover">
                        <thead className='text-success fs-4'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Option</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {
                                data.map((food, index) => {
                                    return (
                                        <tr>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{food.name}</td>
                                            <td>{food.qty}</td>
                                            <td>{food.size}</td>
                                            <td>{food.price}</td>
                                            <td ><button type="button" className="btn p-0 btn-primary" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} > Delete</button> </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className='fs-2 text-white'>Total Price: {totalPrice}/-</div>
                    <div><button className='btn btn-success mt-5' onClick={handleCheckOut}>Check Out</button></div>
                </div>

            }

        </>
    )
}
