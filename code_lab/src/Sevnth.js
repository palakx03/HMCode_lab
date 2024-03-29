import React from 'react';
import Rectangle13 from './images/Rectangle 13.svg';


const Sevnth=()=>{
    return(
        <div className="main">
            <div className="relative mx-auto h-screen w-screen">
            <img className="h-full w-full object-cover" src={Rectangle13}/>

            <div className="absolute top-7 left-0 right-0 flex flex-col items-center justify-center text-white ">
                <h3 className="text-5xl">Portfolio Extraordinaire</h3>
                <h5 className="text-3xl mt-4">Meet Our Happy Client Who Trusted and Joined Us To Explore a Successful Journey </h5>
            </div>
           
        </div>
        </div>
    )
}
export default Sevnth;