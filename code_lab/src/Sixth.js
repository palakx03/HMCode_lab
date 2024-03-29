import React from 'react';
import Rectangle7 from './images/Rectangle 7.svg';
import GroupCombined from './images/Group Combined.svg';
import Rectangle6 from './images/Rectangle 6.svg';
import Rectangle10 from './images/Rectangle 10.svg';

const Sixth=()=>{
    return(
        <div className="main">
            <div className="relative mx-auto h-screen w-screen">
            <img className="h-full w-full object-cover" src={Rectangle7}/>
            <img className="absolute left-56 top-40" src={GroupCombined}/>
            <div className="">
            <img className="absolute right-24 bottom-14" src={Rectangle6}/>
            <img className="absolute right-1/3 bottom-32" src={Rectangle10}/>
            </div>
            <div>
            <img className="absolute right-24 bottom-" src={Rectangle6}/>
            <img className="absolute right-1/3 bottom-32" src={Rectangle10}/>
            </div> <div>
            <img className="absolute right-24 bottom-14" src={Rectangle6}/>
            <img className="absolute right-1/3 bottom-32" src={Rectangle10}/>
            </div> <div>
            <img className="absolute right-24 bottom-14" src={Rectangle6}/>
            <img className="absolute right-1/3 bottom-32" src={Rectangle10}/>
            </div>
            <div className="absolute top-10 left-0 right-0 flex flex-col items-center justify-center">
                <h3 className="text-5xl">Why HM Code LABs?</h3>
                <h5 className="text-3xl mt-4">Since we're a leader in providing lighting fast SaaS services, you get:</h5>
            </div>
            </div>
        </div>
    )
}
export default Sixth;