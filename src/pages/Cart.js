import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart-context';
import { CartCard } from '../components/CartCard';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { state } = useContext(CartContext);
    const { cartItem } = state;

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = cartItem.reduce((acc, item) => acc + (item.price * item.quatity), 0);
        setTotalPrice(total);
    }, [cartItem]);

    return (
        <div className="min-h-screen bg-gray-100">
            {cartItem.length !== 0 ? (
                <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-3/4 p-4 flex flex-col items-start">
                        {cartItem.map((item) => (
                            <CartCard key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="md:w-1/4 p-4 bg-white shadow-md rounded-lg mt-4 md:mt-0 md:ml-8">
                        <h1 className="text-2xl font-bold mb-4">Total: Rs {totalPrice}</h1>
                        <button
                            type="button"
                            className="w-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                            onClick={() => console.log("Checkout Successful")}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven’t added anything to your cart yet.</p>
                        <Link to="/">
                            <button
                                type="button"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center"
                            >
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
