import { useEffect, useState } from "react";
import { PetImg } from "../../types/MenuItems";

const Section = () => {

    const [pets, setPets] = useState<PetImg[]>([]);
    const [newPet, setNewPet] = useState({title: "", date:"", text:"", image:""});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5001/Diary")
        .then(res => res.json())
        .then(data => setPets(data))
        .catch(console.error);
    }, []);

    const handleAddPet = async () => {
        const res = await fetch("http://localhost:5001/Diary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPet),
        });
        const added = await res.json();
        setPets([...pets, added]);
        setNewPet({ title:"", date:"", text:"", image:""});
        setShowForm(false);
    };

    return(
        <div className="w-full bg-gray-200 p-4">
            <h2 className="text-4xl font-bold flex justify-center items-center p-4 mb-4">My Pet Diary & Memory</h2>

            <div className="grid gap-8 md:grid-cols-3">
                {pets.map((item) => (
                    <div className="bg-gray-100 cursor-pointer shadow-md mb-4 rounded-md" key={item.id}>
                        <div className="p-4">
                        <img src={item.image} className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="text-left font-semibold p-2">
                            <h3>Title : {item.title}</h3>
                            <label>Date : {item.date.toLocaleDateString()}</label>
                            <p>Description : {item.text}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-blue-300 shadow-md mb-4 rounded flex justify-center items-center cursor-pointer text-4xl font-bold"
                onClick={() => setShowForm(!showForm)}>
                    +
                </div>
            </div>
            {showForm && (
            <div className="mt-6 p-4 bg-white shadow-md rounded-md">
                <h3 className="font-bold mb-2">新規追加する</h3>
                <input 
                    type="text"
                    placeholder="Title"
                    className="border p-2 w-full mb-2"
                    value={newPet.title}
                    onChange={e => setNewPet({ ...newPet, title:e.target.value})}
                />
                <input 
                    type="date"
                    className="border p-2 w-full mb-2"
                    value={newPet.date}
                    onChange={e => setNewPet({ ...newPet, date:e.target.value})}
                />
                <input 
                    type="text"
                    placeholder="Text"
                    className="border p-2 w-full mb-2"
                    value={newPet.text}
                    onChange={e => setNewPet({ ...newPet, text:e.target.value})}
                />
                <input 
                    type="text"
                    placeholder="image"
                    className="border p-2 w-full mb-2"
                    value={newPet.image}
                    onChange={e => setNewPet({ ...newPet, image:e.target.value})}
                />
                <button className="bg-blue-500 px-4 py-2 rounded" onClick={handleAddPet}> Add Now </button>
            </div>
            )}
        </div>
    );
};

export default Section;