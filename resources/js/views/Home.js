import React, { useContext, useState } from "react";
import { GlobalContext } from "../master";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";


import 'swiper/css';
import "yet-another-react-lightbox/styles.css";


import { Keyboard, Autoplay } from 'swiper/modules';

const Home = () => {
    const { appData, setAppData } = useContext(GlobalContext);

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
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [viewMode, setViewMode] = useState("single"); // "single" veya "grid"

    const toolbarButtonStyle = {
        borderColor:'transparent',
        cursor: 'pointer',
        fontSize: '18px',
        color:'white',
        background:'transparent',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        padding: '2rem'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px',
        width: '100%',
        maxWidth: '1000px'
    };

    const gridImageStyle = {
        width: '100%',
        height: 'auto',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'transform 0.2s ease',
    };

    const gridButtonsWrapper = {
        display: 'flex',
        gap: '10px',
        position:'fixed',
        top:'10px',
        right:'30px',
    };

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
                            <h4 className={'timsColor fw-300 pb-3 pb-md-4'}>
                                Tims Ajans Organizasyon Hizmetleri olarak,
                                20 yılı aşkın deneyimimizle çok geniş bir yelpazede hizmet sunuyoruz...
                            </h4>
                            <h2 className={'fs-72 text-stroke'}>
                                “AYRINTILARDA GİZLİYİZ”
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className={'col-12 col-md-4 align-self-center'}>
                            <img alt={'qr-link'} className={'w-100 pb-3 pb-md-4'} src={'/site/assets/img/timsqr.png'} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={'vh100'}>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                    id={'gallerySection'}
                    className={'py-3 py-md-4'}
                >
                    <Swiper
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 0 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2, spaceBetween: 30 },
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Keyboard, Autoplay]}
                        loop={true}
                        keyboard={{ enabled: true }}
                        className="timsSwiper"
                    >
                        {galleryImages.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ position: "relative", width: "100%" }}>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        style={{ width: "100%", height: "auto", cursor: "pointer", display: "block" }}
                                        onClick={() => {
                                            setPhotoIndex(index);
                                            setIsOpen(true);
                                        }}
                                        onContextMenu={(e) => e.preventDefault()} // sağ tıklamayı engelledik
                                    />
                                    {/* Watermark Logo */}
                                    <img
                                        src="/images/logo.png" // projenin içindeki logo dosyası (public/images/logo.png varsaydım)
                                        alt="Watermark"
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            width: "50px",
                                            opacity: 0.7,
                                            pointerEvents: "none", // tıklamayı engelle
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {isOpen && viewMode === "single" && (
                        <Lightbox
                            mainSrc={galleryImages[photoIndex]}
                            nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
                            prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % galleryImages.length)
                            }
                            toolbarButtons={[
                                <button
                                    className={'ril__builtinButton ril__toolbarItemChild'}
                                    key="grid"
                                    onClick={() => setViewMode("grid")}
                                    style={toolbarButtonStyle}
                                >
                                    <i className="bi bi-grid-3x3"></i>
                                </button>
                            ]}
                        />
                    )}

                    {isOpen && viewMode === "grid" && (
                        <div className="lightbox-grid-overlay" style={overlayStyle}>
                            <div style={gridStyle}>
                                {galleryImages.map((src, index) => (
                                    <div key={index} style={{ position: "relative" }}>
                                        <img
                                            src={src}
                                            alt={`Thumb ${index + 1}`}
                                            style={gridImageStyle}
                                            onClick={() => {
                                                setPhotoIndex(index);
                                                setViewMode("single");
                                            }}
                                            onContextMenu={(e) => e.preventDefault()}
                                        />
                                        {/* Watermark Logo */}
                                        <img
                                            src="/site/assets/img/logo.png"
                                            alt="Watermark"
                                            style={{
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px",
                                                width: "30px",
                                                opacity: 0.7,
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div style={gridButtonsWrapper}>
                                <button onClick={() => setViewMode("single")} style={toolbarButtonStyle}>
                                    <i className="bi bi-layout-sidebar"></i>
                                </button>
                                <button onClick={() => setIsOpen(false)} style={toolbarButtonStyle}>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </section>


        </>
    );
};

export default Home;
