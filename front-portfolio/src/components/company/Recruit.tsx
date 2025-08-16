import { formList } from "../../data/contents";


const Recruit = () => {
    return(
        <div className="p-6 bg-gray-100">
            <h2 className="font-bold text-4xl text-center mb-4">求人情報</h2>
            <form>
                {formList.map((item) =>(
                    <section key={item.id} className="flex flex-col md:flex-row justify-start gap-4 items-center mb-6 border-b border-gray-300 pb-2">
                        <label className="text-lg font-semibold w-32 md:w-40">{item.headLabel}</label>
                        <p>:</p>
                        <p className="flex-1">{item.bodyLabel}</p>
                    </section>
                ))}
            </form>
        </div>
    );
}

export default Recruit;