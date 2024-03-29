import React from 'react';
import Background from './images/Wireframe - 2.svg';
import Laptop from './images/laptop.svg';
import Group401 from './images/Group 401.svg';
import Shadow from './images/Component 109.svg';

const Fifth=()=>{
    return(
        <div className="main">


            <div className="relative mx-auto">

                <img className="h-screen w-screen object-cover" src={Background} alt="purple" />
                <img className="absolute top-0 left-0 transform -translate-x-64 opacity-20"src={Shadow}/>
                <img className="absolute right-12 bottom-40" src={Laptop}/>
                <img className="absolute left-56 bottom-16" src={Group401}/>
                <div className="absolute top-7 left-0 right-0 flex flex-col items-center justify-center text-white ">
                <h3 className="text-5xl">HM Code Labs Has Got You Covered with Everything</h3>
                <h5 className="text-3xl mt-4">Strategize your business transaction with an advanced solution and outperform your competitors!</h5>
            </div>
            </div>
        </div>
    )
}
export default Fifth;