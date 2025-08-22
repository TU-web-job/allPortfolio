const Access = () => {
    return(
        <div className='py-20 px-4 bg-gray-100 text-center'>
            <h2 className='md:text-4xl text-3xl font-bold mb-12'>Access</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className='w-full h-[350px] rounded overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.991969859168!2d139.73513316059532!3d35.65858006150944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1751109635212!5m2!1sja!2sjp" 
                    width='100%'
                    height="100%" 
                    style={{border:0}}
                    loading="lazy" 
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="text-left space-y-4 px-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">The Cafe</h3>
                    <p>住所 : 東京都千代田区1-1-1</p>
                    <p>営業時間 : 6:00 ー 23:00</p>
                    <p>定休日 : 毎週月曜日</p>
                    <p>最寄駅 : 東京駅 徒歩5分</p>
                    <p>東京タワーが見えたらその信号を渡り１つ目の角を左に曲がってすぐにあります。<br/>
                    お気をつけてお越しくださいませ！</p>
                </div>
            </div>
        </div>
    );
};

export default Access;