import { useEffect, useState } from "react";

const images = [
    "/image/build04.jpg",
    "/image/build05.jpg",
    "/image/build06.jpg",
];

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return(
        <header className="relative w-full h-96 overflow-hidden">
            {images.map((src,index) => (
                <img key={index}
                src={src}
                alt={`slide-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                />
            ))}
            <h1 className="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2">Company page</h1>
            
        </header>
    );
}

export default Header;