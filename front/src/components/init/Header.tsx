import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="fixed w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <nav className={`md:flex md:items-center absolute md:static bg-white w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ${isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"} `}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/#works" onClick={() => setIsOpen(false)}>Works</Link></li>
                        <li><Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;