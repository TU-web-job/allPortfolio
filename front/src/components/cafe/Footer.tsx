
const Footer = () => {
    const FooterList = [{title: 'Top', list:'/'}, {title: 'SNS', list:'/'},{title:'Access', link:'/'}]
    return(
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                    <label className="text-2xl font-bold">PortfolioCafe</label>
                </div>
            </div>
            <div className="flex justify-end w-full md:w-auto">
                <ul className="flex flex-col md:flex-row gap-4">
                    {FooterList.map((item, index) => {
                        return(
                            <li key={index}><a href={item.list} className="hover:underline">{item.title}</a></li>
                        );
                    })}
                </ul>
            </div>
            <div className="text-center mt-8 text-sm text-gray-400">
                <label>@Copyright PortfolioCafe All rights reserved</label>
            </div>
        </footer>
    );
};

export default Footer;