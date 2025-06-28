import { Link } from 'react-router-dom';
import { works } from '../../data/works';

const Works = () => {
    return(
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">実績一覧</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {works.map((item) => (
                        <Link to={`/works/${item.id}`} key={item.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
                            <div className="p-6 text-left">
                                <label className="text-xl font-semibold mb-2">{item.title}</label>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;