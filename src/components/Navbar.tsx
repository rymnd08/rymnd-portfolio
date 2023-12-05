import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    
    function toggleSidebar(){
        setShowSidebar(!showSidebar)
    }

    return ( 
        <div className="w-full text-slate-300 font-bold  fixed top-0 bg-dark bg-opacity-80 flex justify-center z-50">
            <div className="flex items-center grow justify-between max-w-5xl py-4 px-4 lg:px-0">
            <h3 className=""><Link to="home" smooth={true} duration={500} className='hover:cursor-pointer'>{'<Rymnd />'} </Link></h3>
            <ul className={'gap-3 md:flex hidden'}>
                <li className="py-1 px-3 ">
                    <Link to="home" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Home</Link>
                </li>
                <li className="py-1 px-3 ">
                    <Link to="skills" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Skills</Link>
                </li>
                <li className="py-1 px-3 ">
                    <Link to="projects" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Projects</Link>
                </li>
                <li className="py-1 px-3">
                    <Link to="about-me" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>About Me</Link>
                </li>
            </ul>
            <button type="button" className='md:hidden' onClick={toggleSidebar}><i className="bi bi-list text-xl "></i></button>
            </div>

            <div className={`sidebar fixed top-16 right-0 bg-dark bg-opacity-90 h-screen w-1/2 border md:hidden ${showSidebar ? 'block' : 'hidden'}`}>
                <ul className='p-4'>
                    <li className="py-1 px-3 ">
                        <Link to="home" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Home</Link>
                    </li>
                    <li className="py-1 px-3 ">
                        <Link to="skills" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Skills</Link>
                    </li>
                    <li className="py-1 px-3 ">
                        <Link to="projects" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>Projects</Link>
                    </li>
                    <li className="py-1 px-3">
                        <Link to="about-me" smooth={true} duration={500} className='hover:cursor-pointer hover:text-white'>About Me</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;