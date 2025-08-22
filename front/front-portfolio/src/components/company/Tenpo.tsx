import { tenpoList } from "../../data/contents"; 

const Tenpo = () => {
    return(
        <div className="p-4 text-center">
            <h2 className="text-4xl font-bold">支店一覧</h2>
            <div>
                {tenpoList.map ((tenpo) => (
                    <div key={tenpo.id} className="mb-8">
                        <h3 className="font-semibold text-center mb-6 m-4">{tenpo.name}</h3>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <table className="md:w-1/2">
                                <tr>
                                    <th>担当エリア : </th>
                                    <td className="text-left">{tenpo.area}</td>
                                </tr>
                                <tr>
                                    <th>住所 : </th>
                                    <td className="text-left">{tenpo.address}</td>
                                </tr>
                                <tr>
                                    <th>電話番号 : </th>
                                    <td className="text-left">{tenpo.phone}</td>
                                </tr>
                            </table>
                            <div className="md:w-1/2 p-4">
                                <iframe 
                                    src={tenpo.map}
                                    className="w-full h-64 rounded shadow"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tenpo;