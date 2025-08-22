import { useEffect, useRef, useState } from 'react';
import { petmain } from '../../data/petMain';
import { petMain } from '../../types/MenuItems';

const getRandomImages = (array: petMain[], count: number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const Main = () => {
    const [dogImage, setDogImage] = useState<petMain[]>([]);
    const [visibleCount, setVisibleCount] = useState(1);
    const observerRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const randomImages = getRandomImages(petmain, 12);
        setDogImage(randomImages);
    },[]);

    useEffect(() => {
        if(!observerRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setVisibleCount(prev => Math.min(prev + 4, 12));
                }
            });
        });

        observer.observe(observerRef.current);
        return () => observer.disconnect();
    },[]);

    return(
        <div className='p-4'>
            <h2 className='text-center text-2xl font-bold text-gray-200 mb-6'>カワイイワンちゃんたち🐶</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {dogImage.slice(0, visibleCount).map((item) => (
                    <FadeInImage key={item.id} src={item.image}/>
                ))}
            </div>
            {visibleCount < 12 && (
                <div ref={observerRef} className='h-10'></div>
            )}
        </div>
    );
};

export default Main;

const FadeInImage = ({src}: {src: string}) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },{
                threshold: 0.1,
            }
        );
        if(imgRef.current){
            observer.observe(imgRef.current);
        }
        return() => observer.disconnect();
    },[]);
    return(
        <div 
            ref={imgRef}
            className={`w-full aspect-[4/3] rounded shadow overflow-hidden
                bg-fray-300 dark:bg-gray-800 relative transform transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-95'}`}
        >
            <img
            ref={imgRef}
            src={src}
            className={`w-full aspect-[4/3] object-cover rounded shadow 
                transition-opacity duration-700 ease-out 
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
        </div>
    );
};