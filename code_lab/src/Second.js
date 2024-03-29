import React from 'react';
import Rectangle7 from './images/Rectangle 7.svg';
import Rectangle70 from './images/Rectangle 70.svg';
import Component107 from './images/Component 107.svg';
import Maskgroup1 from './images/Mask group 1.svg';
import Maskgroup3 from './images/Mask group 3.svg';
import Maskgroup2 from './images/Mask group2.svg';
import Subtract from './images/Subtract.svg';

const Second = ()=>{
    return(
        <div className="main">
            <div className="relative mx-auto h-screen w-screen">
            <img className="h-full w-full object-cover" src={Rectangle7}/>

            <div className="absolute top-7 left-0 right-0 flex flex-col items-center justify-center ">
                <h1 className="text-purple-500 text-8xl">Transforming</h1>
                <h3 className="text-3xl mt-3">Your Ideas Into Reality Rapidly with Quickworks</h3>
                <h5 className="text-xl mt-2">We Provide the Simplest Solution for Launching Your Venture with Deployed Products</h5>
            </div>
            
            <div className="flex flex-col">

                <div className="justify-center item-center">
                <img className=" absolute bottom-24 left-56 mb-80" src={Rectangle70}/>
                <img className="absolute bottom-24 left-72  top-72" src={Maskgroup2} />
                </div>

                <div className="justify-center item-center">
                <img className=" absolute bottom-24 left-56 mb-32" src={Rectangle70}/>
                <img className="absolute bottom-24 left-72 mb-60" src={Maskgroup1}/>
                </div>

                <div>
                <img className=" absolute bottom-9 left-56" src={Rectangle70}/>
                <img className="absolute bottom-9 left-72 mb-28" src={Maskgroup3}/>
                </div>
                <img className="absolute bottom-24 right-56" src={Component107}/>
            </div>
            <img className="absolute top-3 left-12" src={Subtract} />
            </div>
           
        </div>
    )
}
export default Second;