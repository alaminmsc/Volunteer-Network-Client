import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddEvent = () => {
    const { register,handleSubmit, watch, formState: { errors } } = useForm();
    //for file upload
    const [imgageURL, setImgageURL] = useState(null);

    const handleImageUpload = (e)=> {
        console.log(e.target.files[0]);
        const imagFile = new FormData();
        imagFile.set('key','5be73f2068242a3b630e1f9cab67d160');
        imagFile.append('image',e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imagFile)
        .then(function(res) {
            // setFile(res.data.data.display_URL)
            console.log(res.data.data.display_url);
            setImgageURL(res.data.data.display_url);
        })
        .catch(function(error) {
            console.log(error);
        });

    }

    const onSubmit = (data) => {
        const newEvent = {
            name: data.name,
            date: data.date,
            description: data.description,
            image: imgageURL
        }
        fetch('http://localhost:5000/addEvents',{
            method:'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Successfully Submitted')
        })
        .catch(error => console.log(error))
    };

    return (
        <div className="mx-5 my-3">
            <div className="row d-flex">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9 my-2">
                    <div className="d-flex justify-content-between">
                        <h4>Event List</h4>
                        <h4>User</h4>
                    </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-70 px-5 py-5" style={{backgroundColor:'gray'}}>
                    <div className="d-flex">
                        <div className="w-50">
                            <label>
                                <h5>Event Title:</h5></label>
                            <br></br>
                            <input {...register("name", { required: true })} className="form-control" placeholder="Enter your title" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="w-30 mx-4">
                            <label>
                                <h5>Event Date:</h5></label>
                            <br></br>
                            <input type="date" {...register("date", { required: true })} className="form-control" placeholder="Enter your title" />
                            {errors.date && <span>This field is required</span>}
                        </div>
                    </div>
                    <br></br>
                    <div className="d-flex">
                        <div className="w-50">
                            <label>
                                <h5>Description:</h5></label>
                            <br></br>
                            <textarea {...register("description", { required: true })} className="form-control" cols="10" rows="8" placeholder="Enter your title" />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="mx-4" style={{width:'250px'}}>
                            <label>
                                <h5>Banner</h5></label>
                            <input type="file" {...register("photo", { required: true })} className="form-control" onChange={handleImageUpload}/>
                            {errors.photo && <span>This field is required</span>}
                        </div>
                    </div>
                    <br></br>
                    <input type="submit" className="btn btn-block btn-info" />
                    </form> 
                </div>

                
            </div>
        </div >
    );
};

export default AddEvent;