import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css'


const Home = () => {
    const[userDetail, setUserDetail]=useState([])
    const getData = async ()=> {
        try{
        const response = await axios.get("https://66061ceed92166b2e3c34460.mockapi.io/users")
        setUserDetail(response.data)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getData()

    },[])
    return (
        <div className='container p-3 mt-2 b-4'>
            <h1 className="title text-center p-2">HOME</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
                {/* Mapping through the UserDetails array to display user details */}
                {userDetail.map((item, index)=>{
                    return(
                        <div key={index}>
                            <div className="card h-100" id='cards'>
                            <img src={item.avatar} class="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">Name: {item.name}</h5>
                                <p>{item.description}</p>
                                <h6 className="card-text">Email: {item.email}</h6>
                                <h6 className="card-text">Place: {item.place}</h6>
                                </div>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
            <div className="row mt-3 p-5">
                <h1> For Create New User:
                <Link to="/create" className='btn btn-success ms-2'>Create</Link>
                </h1>
            </div>
            
        </div>
    );
};

export default Home;