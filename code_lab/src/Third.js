import React from 'react';
import Background from './images/Wireframe - 2.svg';
import Group3rd from './images/Group 3rd.svg';
import Phone from './images/Group 86.svg';
import Dots from './images/Dots.svg';
import Shadow from './images/Component 109.svg';


const Third = () => {
    return (
        <div className="main">


            <div className="relative mx-auto">
            
                <img className="h-screen w-screen object-cover" src={Background} alt="purple" />
                <img className="absolute top-0 left-0 transform -translate-x-64 opacity-25"src={Shadow} />
                <div className="text-white absolute top-8 left-0 right-0 flex flex-col items-center justify-center">
                    <h2 className="text-7xl">Embark</h2>
                    <h2 className="text-5xl mt-3">on the Voyage of our Saas Development Services</h2>
                    <h4 className="text-3xl mt-3 ">Take a tour of our powerful and products and see which one fits your business the most!</h4>
                </div>
                <div className="absolute left-80 top-64">
                    <img  src={Group3rd} />
                </div>
                <div className="absolute right-80 top-64 w-80">
                    <img src={Phone}/>
                   
                </div>
                <div className="absolute bottom-6 flex justify-center w-full">
                <img className=" absolute bottom-9 " src={Dots}/>
                </div>
            </div>
           
        </div>
    )
}
export default Third;