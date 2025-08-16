const HeaderImg = () => {
    return(
        <div className="relative w-full h-[400px]">
            <img src="/image/cafe.jpg" alt="The Cafe Shop" className="w-full h-full object-cover"/>
            <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-200">The Cafe Shop</h1>
        </div>
    )
};

export default HeaderImg;