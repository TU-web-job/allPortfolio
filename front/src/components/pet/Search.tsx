import { useState } from 'react';
import { dogType } from '../../data/petMain';
import { DogType } from '../../types/MenuItems';

const dogData: {[key:string]: string} = {
    '柴犬': 'shiba',
    'ゴールデンレトリバー': 'retriever/golden',
    'ビーグル': 'beagle',
    'ポメラニアン': 'pomeranian',
    'チワワ': 'chihuahua',
    'コーギー': 'corgi',
    'トイプードル':'poodle/toy',
    'シュナウザー':'schnauzer',
};

const bichon = [
    '/image/bichon.jpg',
    '/image/bichon1.jpg',
    '/image/bichon2.jpg',
];
const bichonName = ['ビションフリーゼ', 'ビション', 'フリーゼ', 'ビショ', 'びしょん', 'びしょ', 'フリー', 'ビ',];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
    const [breedName, setBreedName] = useState('');

    const handleSearch = async() => {
        if(!searchTerm.trim()){
            setError('未入力ではワンちゃんを探せません...');
            setImageUrl('');
            setBreedName('');
            return;
        }

        const search = searchTerm.trim();
        if(bichonName.some(keyword => keyword.includes(search) || search.includes(keyword))){
            const randomIndex = Math.floor(Math.random() * bichon.length);
            setImageUrl(bichon[randomIndex]);
            setError('');
            setBreedName('ビションフリーゼ');
            return;
        }
        const foundKey = Object.keys(dogData).find(key => key.includes(search));
        if(!foundKey){
            setError('お探しのワンちゃんは旅に出てます✈️');
            setImageUrl('');
            setBreedName('');
            return;
        }
        const breedPath = dogData[foundKey];
        
        try{
            const res = await fetch(`https://dog.ceo/api/breed/${breedPath}/images/random`);
            const imgData = await res.json();
            setImageUrl(imgData.message);
            setError('');
            setBreedName(foundKey);
            console.log(res);
            
        } catch(err) {
            console.error(err);
            setError('画像がありません。');
            setImageUrl('');
            setBreedName('');
        }
    };

    return(
        <div className='max-w-md mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4 text-center text-gray-500'>ワンワンサーチ🐶🔍</h2>
            <div className='flex gap-2 mb-4'>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='ワンちゃんを探す'
                    className='flex-1 p-2 rounded border'
                />
                <button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>検索</button>
            </div>
            {error && <p className='text-red-400 text-center mb-2'>{error}</p>}
            {imageUrl && (
                <div className='animate-fade-in'>
                    <img
                        src={imageUrl}
                        className='w-full aspect-[4/3] object-cover rounded shadow'
                    />
                    <h3 className='text-xl font-semibold mt-2 text-gray-500 text-center'>{breedName}</h3>
                </div>
            )}
        </div>
    );
};

export default Search;