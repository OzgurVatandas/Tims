import React, {useContext, useEffect} from "react";
import {GlobalContext} from "../master";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

import {Autoplay} from 'swiper/modules';


const Home = () => {
    const {appData, setAppData} = useContext(GlobalContext);
    const galleryImages = [
        '/site/assets/gallery/img1.jpg',
        '/site/assets/gallery/img2.jpg',
        '/site/assets/gallery/img3.jpg',
        '/site/assets/gallery/img4.jpg',
        // yeni görselleri buraya ekleyebilirsin
    ];

    return (
        <>
                <section className={'vh-100'}>
                    <div className={'container py-3 py-md-5'}>
                        <div className={'row g-5'}>
                            <div className={'col-12 col-md-8 align-self-center'}>
                                {/*<img alt={'logo'} className={'w-100 pb-3 pb-md-4'} src={'/site/assets/img/logo.png'}/>*/}
                                <h4 className={'timsColor fw-300 pb-3 pb-md-4'}>"Tims Organizasyon ekibi olarak 20 yılı
                                    aşkın süredir düğün
                                    organizasonu, kurumsal etkinlik, bireysel organizasyonlarınız ve Led Ekran , Ses
                                    Sistemi
                                    ,
                                    Sandalye , Masa vb ekipman kiralama gibi pek çok alanda hizmet veriyoruz.
                                    Profesyonel ekibimizle unutulmaz anılar yaratmak ve ayrıntılarda gizli kalmak için
                                    çalışıyoruz."</h4>
                                <h2 className={'fs-72 text-stroke'}>“AYRINTILARDA
                                    GİZLİYİZ”</h2>
                            </div>
                            <div className={'col-12 col-md-4 align-self-center'}>
                                <img alt={'qr-link'} className={'w-100 pb-3 pb-md-4'}
                                     src={'/site/assets/img/timsqr.png'}/>
                                {/*<a href={"tel:903723230532"} target={"_blank"}><h5*/}
                                {/*    className={'ibm fs-30 timsColor fw-100 pb-3 pb-md-4'}>TEL : 0 372 323 0 532</h5></a>*/}
                                {/*<a href={"https://maps.app.goo.gl/URcs1kzW6AEA5H6M7"} target={"_blank"}><h5*/}
                                {/*    className={'ibm fs-30 timsColor text-uppercase fw-100'}>kırmacı mah. hasan canver cad.*/}
                                {/*    no:47/a kdz.ereğli</h5></a>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'vh-100'}>
                    <div id={'gallerySection'} className={'py-3 py-md-4'}>
                        <Swiper
                            breakpoints={{
                                640: {slidesPerView: 1, spaceBetween: 0},
                                768: {slidesPerView: 2, spaceBetween: 20},
                                1024: {slidesPerView: 2, spaceBetween: 30},
                            }}
                            autoplay={{delay: 1500, disableOnInteraction: false}}
                            pagination={{clickable: true}}
                            modules={[Autoplay]}
                            className="timsSwiper"
                        >
                            {galleryImages.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img src={src} alt={`Slide ${index + 1}`} style={{width: '100%', height: 'auto'}}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </section>
        </>
    );
};

export default Home;
