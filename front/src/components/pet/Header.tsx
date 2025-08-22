import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    return(
        <header className="w-full h-[600px] relative overflow-hidden">
            <img src="/image/headerDog.webp" className="w-full h-full object-cover"/>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full px-4'>
                <h1 className='text-4xl md:text-5xl text-white font-bold w-[300px] md:w-[500px]'>
                    <Typewriter 
                        words={['Everyone in the world loves dogs', 'Every day is happy with dogs']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={1500}
                    />
                </h1>
            </div>
        </header>
    );
}

export default Header;