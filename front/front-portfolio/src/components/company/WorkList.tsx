import { workList } from "../../data/contents";
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

const WorkList = () => {
    return(
        <div className="p-4 m-4 text-center bg-gray-200">
            <h2 className="font-bold text-4xl">実績一覧</h2>
            <div className="py-20 px-4 max-w-6xl mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    loop={true}
                >

                
                {workList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-white rounded shadow p-4 h-[500px] flex flex-col justify-between">
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                            </div>
                            <div className="p-4 mt-4">
                                <img src={item.image} className="w-full h-48 object-cover rounded"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    );
}

export default WorkList;