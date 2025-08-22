import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className='fixed w-full bg-navy-200 z-50 text-blue-400'>
            <div className='max-w-6xl mx-auto flex justify-between items-center p-4'>
                <Link to="/" className='text-xl font-bold'>Cafe Page</Link>
                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        {isOpen ? (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        ) : (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        )}
                    </svg>
                </button>

                <nav className={`md:flex md:items-center absolute md:static bg-navy w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ${isOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0'}`}>
                    <ul className='flex flex-col md:flex-row md:space-x-6 p-4 md:p-0'>
                        <li><Link to='/' onClick={() => setIsOpen(false)}>Cafe Top</Link></li>
                        <li><Link to='/#menu' onClick={() => setIsOpen(false)}>Menu</Link></li>
                        <li><Link to='/#access' onClick={() => setIsOpen(false)}>Access</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;