import { footerList } from "../../data/contents";

const Footer = () => {
    return(
        <footer className="bg-gray-400 py-8 px-4 text-white">
            <div className="max-w-6xl mx-"><h3 className="font-bold text-navy-100 font-bold"><a href="/">Company</a></h3></div>
            <div className="flex justify-end w-full md:w-auto">
                <ul className="flex flex-col md:flex-row gap-4">
                    {footerList.map((list) => {
                        return(
                            <li key={list.id}><a className="hover:underline" href={list.url}>{list.name}</a></li>
                        );
                    })}
                </ul>
            </div>
            <div className="text-center mt-8 text-slim text-black-200"><label>@Copyright PortfolioCompany All rights reserved</label></div>
        </footer>
    )
}

export default Footer;