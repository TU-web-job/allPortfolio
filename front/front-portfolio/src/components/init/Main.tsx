
const Main = () => {
    return(<>
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-16 bg-gray-50">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hello MyPortfolio!!</h1>
            <p className="text-lg text-gray-600">作成したポートフォリオを紹介します。</p>
            
        </div>
        <div className="md:w-1/2">
            <img src="/image/cafetop.jpg" alt="写真" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
        </div>
    </section>
    </>
    )
}

export default Main;