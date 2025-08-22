

const Footer = () => {
    return(
        <footer className="relative flex justify-between items-start w-full p-4 h-[150px] border-t border-gray-400">
            <h3 className="text-2xl p-4"><a href="/" className="items-center font-semibold text-gray-300 hover:text-blue-400 underline hover:decoration-blue-400 transition">ワンワン王国</a></h3>
            <ul className="items-right p-2 text-right space-y-1">
                <li><a href="/" className="hover:text-blue-300 underline decoration-gray-400 hover:decoration-blue-300 transition">Portfolio</a></li>
                <li><a href="/" className="hover:text-blue-300 underline decoration-gray-400 hover:decoration-blue-300 transition">My Site</a></li>
            </ul>
            <div className="absolute w-full bottom-2 text-center mt-8 text-sm text-gray-300"><label>@Copyright PortfolioCompany All rights reserved</label></div>
        </footer>
    );
}

export default Footer;