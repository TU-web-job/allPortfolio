const sectionItem = [
    {icon: "🤝", title: "サポート", description: "納品、公開後の修正も対応いたします！"},
    {icon: "📞", title: "連絡", description: "12時間以内にはお返事させていただきます。"},
    {icon: "✅", title: "品質保証", description: "高品質を担保いたします。"}
]

const Section = () => {
    return(
        <section className="bg-gray-100 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">選ばれる理由</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {sectionItem.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold md-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;