 import { Link } from 'react-router-dom';
 import { FaLongArrowAltRight } from "react-icons/fa";

const AboutSection = () => {
    return(
        <>
        <section id='about'>
            <div className="max-w-6xl mx-auto py-5">
                <div className="grid grid-cols-2">
                    <div className="py-17">
                        <h1 className='font-bold text-5xl'> AMBAR — Smart Attendance. Zero Hassle. </h1>
                        <p className='mt-4 font-instrument '>Track time, manage breaks, and run reports in seconds. Save admin hours and keep everyone accountable.</p>
                        <div className='mt-5'>
                            <Link to="/about" className='btn btn-primary' >Try AMBAR Free <FaLongArrowAltRight /></Link>
                        </div>
                        {/* <div className="mt-8 space-x-4">
                                <button className="btn btn-primary font-inter font-medium hover:bg-indigo-700">
                                Get Started
                                </button>
                                <button className="btn btn-accent font-inter font-medium hover:bg-gray-300">
                                Request Demo
                                </button>
                            </div> */}
                    </div>
                    <div className="" >
                        <img  src="./frontend/images/headerImg.jpg" className="w-[67%] float-right" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutSection;