import { content } from '../../data/contents';

const Contents = () => {
    return (
        <div className='py-20 px-4'>
            {content.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <section
                        key={item.id}
                        className={`
                            flex flex-col md:flex-row items-center md:justify-between py-12
                            ${isEven ? 'bg-white' : 'bg-gray-100'}
                            ${!isEven ? 'md:flex-row-reverse' : ''}
                        `}
                    >
                        <div className='md:w-1/2 p-4 text-center md:text-left'>
                            <h2 className='text-2xl font-semibold mb-4'>{item.title}</h2>
                            <p className='text-gray-700 whitespace-pre-line'>{item.text}</p>
                        </div>

                        <div className='md:w-1/2 p-4 flex justify-center'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='max-w-full h-auto rounded shadow'
                            />
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Contents;