import React, {useContext, useEffect} from "react";
import {GlobalContext} from "../master";
import {Swiper, SwiperSlide} from 'swiper/react';
import { motion } from "framer-motion";


import 'swiper/css';

import {Keyboard, Autoplay} from 'swiper/modules';
import {ToastContainer} from "react-toastify";




const Home = () => {
    const {appData, setAppData} = useContext(GlobalContext);
    const galleryImages = [
        '/site/assets/gallery/img1.jpg',
        '/site/assets/gallery/img2.jpg',
        '/site/assets/gallery/img3.jpg',
        '/site/assets/gallery/img4.jpg',
        '/site/assets/gallery/img5.jpg',
        '/site/assets/gallery/img6.jpg',
        '/site/assets/gallery/img7.jpg',
        '/site/assets/gallery/img8.jpg',
        '/site/assets/gallery/img9.jpg',
        '/site/assets/gallery/img10.jpg',
        '/site/assets/gallery/img11.jpg',
        '/site/assets/gallery/img12.jpg',
        '/site/assets/gallery/img13.jpg',
        '/site/assets/gallery/img14.jpg',
        '/site/assets/gallery/img15.jpg',
        '/site/assets/gallery/img16.jpg',
        '/site/assets/gallery/img17.jpg',
        '/site/assets/gallery/img18.jpg',
        '/site/assets/gallery/img19.jpg',
        '/site/assets/gallery/img20.jpg',
        '/site/assets/gallery/img21.jpg',
        '/site/assets/gallery/img22.jpg',
        '/site/assets/gallery/img23.jpg',
        '/site/assets/gallery/img24.jpg',
        '/site/assets/gallery/img25.jpg',
        '/site/assets/gallery/img26.jpg',
        '/site/assets/gallery/img27.jpg',
        '/site/assets/gallery/img28.jpg',
        '/site/assets/gallery/img29.jpg',
        '/site/assets/gallery/img30.jpg',
        '/site/assets/gallery/img31.jpg',
        '/site/assets/gallery/img32.jpg',
        '/site/assets/gallery/img33.jpg',
        '/site/assets/gallery/img34.jpg',
        // yeni görselleri buraya ekleyebilirsin
    ];

    return (
        <>
            <section className={'vh100'}>
                <div className={'container py-3 py-md-5'}>
                    <div className={'row g-5'}>
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className={'col-12 col-md-8 align-self-center'}>
                            {/*<img alt={'logo'} className={'w-100 pb-3 pb-md-4'} src={'/site/assets/img/logo.png'}/>*/}
                            <h4 className={'timsColor fw-300 pb-3 pb-md-4'}>Tims Ajans Organizasyon Hizmetleri olarak,
                                20 yılı aşkın deneyimimizle çok geniş bir yelpazede hizmet sunuyoruz. Düğün ve özel
                                davetlerden kurumsal etkinliklere, bireysel organizasyonlardan sanatçı temini, konser ve
                                festival organizasyonlarına kadar tüm ihtiyaçlarınıza profesyonel çözümler getiriyoruz.
                                Ayrıca LED ekran, ses sistemi, masa, sandalye gibi ekipman kiralama hizmetleriyle de
                                organizasyonlarınızı eksiksiz hale getiriyoruz. Çünkü biz, her detayı titizlikle
                                planlayan ekibimizle biliyoruz ki unutulmaz anlar</h4>
                            <h2 className={'fs-72 text-stroke'}>“AYRINTILARDA
                                GİZLİDİR”</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className={'col-12 col-md-4 align-self-center'}>
                            <img alt={'qr-link'} className={'w-100 pb-3 pb-md-4'}
                                 src={'/site/assets/img/timsqr.png'}/>
                            {/*<a href={"tel:903723230532"} target={"_blank"}><h5*/}
                            {/*    className={'ibm fs-30 timsColor fw-100 pb-3 pb-md-4'}>TEL : 0 372 323 0 532</h5></a>*/}
                            {/*<a href={"https://maps.app.goo.gl/URcs1kzW6AEA5H6M7"} target={"_blank"}><h5*/}
                            {/*    className={'ibm fs-30 timsColor text-uppercase fw-100'}>kırmacı mah. hasan canver cad.*/}
                            {/*    no:47/a kdz.ereğli</h5></a>*/}
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className={'vh100'}>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                    id={'gallerySection'} className={'py-3 py-md-4'}>
                    <Swiper
                        breakpoints={{
                            640: {slidesPerView: 1, spaceBetween: 0},
                            768: {slidesPerView: 2, spaceBetween: 20},
                            1024: {slidesPerView: 2, spaceBetween: 30},
                        }}
                        autoplay={{delay: 2500, disableOnInteraction: false}}
                        pagination={{clickable: true}}
                        modules={[Keyboard, Autoplay]}
                        loop={true}
                        keyboard={{
                            enabled: true,
                        }}
                        className="timsSwiper"
                    >
                        {galleryImages.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={`Slide ${index + 1}`} style={{width: '100%', height: 'auto'}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </motion.div>
            </section>
            {/*<section id={'references'} className={'vh100'}>*/}
            {/*    <div className={'container'}>*/}
            {/*        <h2 className={'text-white text-center'}>Bizi Tercih Edenler</h2>*/}
            {/*        <p className={'text-white'}>Tims Ajans Organizasyon Hizmetleri olarak, yıllara dayanan tecrübemizle*/}
            {/*            bugüne kadar Türkiye’nin birçok şehrinde sayısız kurumsal ve bireysel organizasyona imza attık.*/}
            {/*            Organizasyon hizmetlerimizi tercih edenler arasında; kamu kurumları, belediyeler, özel sektör*/}
            {/*            firmaları, sosyal etkinlik platformları ve yüzlerce mutlu bireysel müşteri yer alıyor.*/}
            {/*        </p>*/}
            {/*        <p className={'text-white mb-0'}>Sunduğumuz kaliteli hizmet ve profesyonel yaklaşım sayesinde;</p>*/}
            {/*        <ul className={'list-style-none text-white'}>*/}
            {/*            <li>Açılış ve lansman etkinliklerinde tanınmış markalara,</li>*/}
            {/*            <li>Konferans, seminer ve bayi toplantılarında birçok kurumsal firmaya,</li>*/}
            {/*            <li>Festival ve konser organizasyonlarında yerel yönetimlere ve sanatçılara,</li>*/}
            {/*            <li>Düğün, doğum günü ve özel davetlerde ise sayısız bireysel müşterimize hizmet verdik.</li>*/}
            {/*        </ul>*/}
            {/*        <p className={'text-white '}>Referanslarımız, bizi tercih edenlerin memnuniyetiyle büyümeye devam*/}
            {/*            ediyor. Her projeye ilk günkü heyecanımızla yaklaşıyor, güvene ve kaliteye dayalı kalıcı iş*/}
            {/*            birlikleri kurmaktan mutluluk duyuyoruz.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
};

export default Home;
