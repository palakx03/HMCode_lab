import React from 'react';
import Background from './images/Wireframe - 2.svg';
import Shadow from './images/Component 109.svg';
import Rectangle13 from './images/Rectangle 13.svg';
import Rectangle7 from './images/Rectangle 7.svg';
import FrameBl from './images/Frame black.svg';
import Call from './images/Call.svg';
import Mail from './images/Mail.svg';
import Line from './images/Line.svg';
import Logo from './images/HM-codelabs-logo 1.svg';





const Eighth = () => {
    return (
        <div className="main">


            <div className="relative mx-auto">

                <img className="h-screen w-screen object-cover" src={Background} alt="purple" />
                <img className="absolute top-0 left-0 transform -translate-x-64 opacity-20" src={Shadow} />
                <img className="absolute top-44  w-2/3 rounded-3xl left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={Rectangle7} />
                <img className="absolute left-80 ml-10 -top-16 -mt-3" src={FrameBl} />

                <div className="absolute -top-9 left-96 text-white">
                    <h1 className="text-3xl">We are a Global Leader </h1>
                    <h1 className="text-3xl">in new Age digital</h1>
                    <h1 className="text-3xl">product development</h1>

                    <h3 className="text-xl mt-12">You Can Bank on Us!</h3>

                    <h2 className="text-xl mt-16">Contact Info:</h2>

                    <div className="text-xl mt-16 flex">
                        <img src={Call} /> <h4 className="ml-5">+91 98546-45852</h4>
                    </div>
                    <div className="text-xl mt-7 flex">
                        <img src={Mail} /><h4 className="ml-5">hmcodelab@gmail.com</h4>

                    </div>

                    <img className=" absolute left-96 ml-24 top-12 bg-white flex" src={Line} />
                    <img className="bg-white absolute right-0 top-32 flex" src={Line} />






                </div>




                <div className="absolute -bottom-96 left-0 right-0">
                    <img className="w-full" src={Rectangle13} />
                    <img className="absolute top-12 left-56" src={Logo} />
                    <h2 className="absolute bottom-44 text-xl left-56 text-white">Lorem ipsum dolor sit amet,....</h2>
                </div>
                <div className="absolute -bottom-96 left-0 right-0">
                <div className="absolute left-96 ml-96 bottom-72 text-white -mb-24">
                    <h1 className="mt-12 text-3xl">Quick Link's</h1>
                    <h3 className="mt-12 text-2xl">Home</h3>
                    <h3 className="mt-6 text-2xl">Projects</h3>
                    <h3 className="mt-6 text-2xl">More</h3>
                    <h3 className="mt-6 text-2xl">Contact</h3>
                </div>
                </div>

                <div className="absolute -bottom-96 left-0 right-0 bg-black text-white">
                    <div className="absolute right-72  bottom-96 -mb-12">
                    <h1 className="text-3xl mb-1">For Every Update</h1>
                    <div className="flex rounded-xl border-white border-2  w-80 ">
                    <h3 className="text-xl p-3 ">Enter Email</h3>
                    <div className="flex-grow"></div>
                    <h3 className="text-xl bg-white text-black rounded-xl w-24 h-12 flex justify-center item-center mt-1 mb-1 mr-1">Subscribe</h3></div></div>
                    <div className="">
                 
                <div className="flex justify-center item-center text-xl"><p className="border-2 border-white rounded-full w-6 h-6 bottom-0">c</p><br></br> KATINA SKILLS PRIVATE LIMITED 2023</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Eighth;