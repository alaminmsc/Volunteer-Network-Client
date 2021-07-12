import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        fetch('http://localhost:5000/registerEvents',{
            method:'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Successfully Submitted')
        })
        .catch(error => console.log(error))
    };
    
    return (
        <div className="container">
            <div style={{width:'70%', margin:'auto'}} className="text-center">
                <Link to="/">
                <img src={logo} alt="" className="my-2 py-1" width="180px"></img>
                </Link>
                <h3>Register as a Volunteer</h3>
                <br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} class="form-control" value={loggedInUser.userName} />
                {errors.name && <span>This field is required</span>}
                <br></br>
                <input type="email" {...register("email", { required: true })} class="form-control" value={loggedInUser.email}/>
                {errors.email && <span>This field is required</span>}
                <br></br>
                <input class="form-control" type="date" {...register("date", { required: true })}/>
                {errors.date && <span>This field is required</span>}
                <br></br>
                <input class="form-control" type="text" {...register("description", { required: true })} placeholder="Description"/>
                {errors.description && <span>This field is required</span>}
                <br></br>
                <input class="form-control" type="text" {...register("title", { required: true })} value={name}/>
                {errors.title && <span>This field is required</span>}
                <br></br>
                <input className="btn btn-block btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Register;