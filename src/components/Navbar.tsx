import { Link } from 'react-scroll';

const Navbar = () => {

    return ( 
        <div className="w-full text-white font-bold  fixed top-0 bg-dark bg-opacity-80 flex justify-center z-50">
            <div className="flex items-center grow justify-between max-w-5xl py-4 px-4 lg:px-0">
            <h3 className=""><Link to="home" smooth={true} duration={500} className='hover:cursor-pointer'>{'<Rymnd />'} </Link></h3>
            <ul className="gap-3 flex">
                <li className="py-1 px-3 ">
                    <Link to="home" smooth={true} duration={500} className='hover:cursor-pointer'>Home</Link>
                </li>
                <li className="py-1 px-3 ">
                    <Link to="skills" smooth={true} duration={500} className='hover:cursor-pointer'>Skills</Link>
                </li>
                <li className="py-1 px-3 ">
                    <Link to="projects" smooth={true} duration={500} className='hover:cursor-pointer'>Projects</Link>
                </li>
                <li className="py-1 px-3">
                    <Link to="about-me" smooth={true} duration={500} className='hover:cursor-pointer'>About Me</Link>
                </li>
            </ul>
            {/* <button type="button"><i className="bi bi-list text-xl "></i></button> */}
            </div>
        </div>
     );
}
 
export default Navbar;