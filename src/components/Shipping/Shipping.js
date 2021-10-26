import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const {user}=useAuth()
    const onSubmit = data => {
        const savedCart=getStoredCart()
        data.order=savedCart
    fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        if(result){
            alert('Orders placed Successfully')
            clearTheCart()
            reset()
        }
    })
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
               
                <input defaultValue={user.displayName} {...register("name")} placeholder="your name" />
                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="" {...register("phone")} placeholder="your phone number" />
                <input defaultValue="" {...register("address")} placeholder="your present address" />
                <input defaultValue="" {...register("city")} placeholder="your city " />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;