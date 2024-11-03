
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line 
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="p-4 shadow-lg ">
            <div className="nav-container mx-auto flex justify-between items-center mt-3 px-6 glow-effect">
                {/* Logo / Title */}
                <h2 className="text-xl text-white tracking-widest">
                    Asma Tariq Ansari
                </h2>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="text-white md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navbar Links */}
                <ul className={`flex-col md:flex md:flex-row md:space-x-10 absolute md:static top-16  cursor-pointer text-white left-0 w-full md:w-auto md:bg-transparent transition-all duration-200 ease-in ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    <li><Link to="experties" smooth={true} duration={500}>Experties</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
