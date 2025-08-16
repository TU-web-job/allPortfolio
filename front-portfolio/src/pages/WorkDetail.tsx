import { works } from '../data/works';
type Props = {
    id: string;
    onViewDemo:() => void;
    onBack:() => void;
}

const WorkDetail = ({id, onViewDemo, onBack}: Props) => {
    const work = works.find((w) => w.id === id);
    if(!work) return <p>Not Found</p>;

    return(
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
            <img src={work.image} alt={work.title} className="w-full rounded mb-4" />
            <button onClick={onViewDemo} className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mr-4">デモサイトを見る</button>
            <button onClick={onBack} className="inline-block bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600">戻る</button>
        </section>
    );
};

export default WorkDetail;