import React, {useState} from "react";
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { FaBriefcase, FaHeart, FaStar, FaMusic, FaTools } from "react-icons/fa";

const Footer = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '');
        const withZero = digits.startsWith('0') ? digits : '0' + digits;
        const sliced = withZero.slice(0, 11);
        const formatted = sliced
                .replace(/^(\d{1})(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3 $4') ||
            sliced.replace(/^(\d{1})(\d{3})(\d{3})$/, '$1 $2 $3') ||
            sliced.replace(/^(\d{1})(\d{3})$/, '$1 $2') ||
            sliced;
        return formatted;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'phone') {
            const digitsOnly = value.replace(/\D/g, '');
            const formatted = formatPhone(digitsOnly);
            setFormData(prev => ({...prev, phone: formatted}));
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Telefon numarasını temizle, sadece rakamlar olsun
        const cleanPhone = formData.phone.replace(/\D/g, '');

        const dataToSend = {...formData, phone: cleanPhone};

        emailjs.send('service_bbp9vqh', 'template_h70734i', dataToSend, '5pNIxKCQNJuLDGEbQ')
            .then(() => {
                toast.success('Mesajınız gönderildi!');
                setFormData({name: '', phone: '', message: ''});
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                toast.error('Gönderimde hata oluştu, lütfen tekrar deneyin.');
            });
    };

    return (
        <>
            <section className="vh100 position-relative text-white">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    id="hakkimizda"
                    className="col-12 col-md-10 mx-auto"
                >
                    <h2 className="text-uppercase mb-4 text-center">Hakkımızda</h2>

                    <Tabs
                        defaultActiveKey="kurumsal"
                        id="hakkimizda-tabs"
                        className="mb-3"
                        justify
                        variant="pills"
                    >
                        {/* KURUMSAL ETKİNLİKLER */}
                        <Tab eventKey="kurumsal" title="Kurumsal Etkinlikler">
                            <p>
                                Tims Organizasyon olarak, markanızın ruhunu yansıtan unutulmaz kurumsal
                                etkinlikler tasarlamakta uzmanız. Samimi ekip buluşmalarından büyük çaplı
                                konferanslara kadar her aşamayı özenle planlıyor, yaratıcılıkla hayata geçiriyoruz.
                            </p>
                            <p>
                                Çünkü biz ayrıntılarda gizliyiz. Her detayda fark yaratıyor, katılımcılarda
                                kalıcı izlenimler bırakıyoruz. Siz sadece hayal edin — gerisini biz titizlikle
                                hallediyoruz.
                            </p>
                        </Tab>

                        {/* DÜĞÜN ORGANİZASYONLARI */}
                        <Tab eventKey="dugun" title="Düğün Organizasyonları">
                            <p>
                                Tims Organizasyon olarak, özel gününüzü sevgi, kahkaha ve unutulmaz anılarla dolu
                                etkileyici bir kutlamaya dönüştürmekte uzmanız. Hayallerinizi gerçeğe dönüştürürken,
                                her aşamayı titizlikle planlıyor ve kusursuz biçimde uyguluyoruz.
                            </p>
                            <p>
                                Mekana ilk biz giriyor, en son biz çıkıyoruz. Her ayrıntıya verdiğimiz özen sayesinde
                                sürecin her adımında fark yaratıyoruz. Çünkü biz, ayrıntılarda gizliyiz.
                            </p>
                        </Tab>

                        {/* ÖZEL ETKİNLİKLER */}
                        <Tab eventKey="vip" title="Özel Etkinlikler - VIP">
                            <p>
                                Her özel an, unutulmaz bir deneyimi hak eder. Tims Organizasyon olarak, VIP davetlerden
                                butik tasarımlı organizasyonlara kadar her etkinliği sıra dışı bir atmosfere
                                dönüştürmekte ustayız.
                            </p>
                            <p>
                                Sloganımız net: <strong>“Özel anlarınızı sıra dışı deneyimlere dönüştürelim.”</strong>
                            </p>
                            <p>
                                Bu sözü yalnızca kullanmakla kalmıyor, her ayrıntıyı titizlikle ele alarak hayata
                                geçiriyoruz. Mekana ilk biz giriyor, en son biz çıkıyoruz. Tüm hazırlık süreci boyunca
                                oradayız, her detayda fark yaratıyoruz. Çünkü biz, ayrıntılarda gizliyiz.
                            </p>
                        </Tab>

                        {/* FESTİVAL VE SANATÇI */}
                        <Tab eventKey="festival" title="Festival & Sanatçı">
                            <p>
                                Tims Organizasyon; yüksek enerjili festivallerden konserlere, sanatçı temsillerinden
                                özel performans ekiplerine kadar geniş kapsamlı etkinliklerin kusursuzca hayata
                                geçirilmesini sağlar.
                            </p>
                            <p>
                                Sanatçı ve menajer yönetimi dışında; özel dans grupları, yaratıcı aktiviteler,
                                profesyonel sunucular ve interaktif sahne içerikleri ile organizasyonlarınıza özgün
                                bir atmosfer katar.
                            </p>
                            <p>
                                Sahne tasarımı, ses ve ışık sistemleri, LED ekran kurulumları gibi teknik detayları
                                uzman ekibimizle titizlikle planlıyor, izleyicilere unutulmaz deneyimler sunuyoruz.
                            </p>
                        </Tab>

                        {/* EKİPMAN KİRALAMA */}
                        <Tab eventKey="ekipman" title="Ekipman Kiralama">
                            <p>
                                Tims Organizasyon, her türlü etkinlik ve davet için kapsamlı ekipman kiralama hizmeti
                                sunar. Teknik altyapıdan estetik dokunuşlara kadar ihtiyaç duyulan her unsuru profesyonel
                                bir şekilde temin ediyor ve uyguluyoruz.
                            </p>
                            <strong>Kiralama hizmetlerimiz arasında:</strong>
                            <ul>
                                <li>LED ekran sistemleri</li>
                                <li>Sahne kurulumu ve truss sistemleri</li>
                                <li>Ses ve ışık teknolojileri</li>
                                <li>Mobil jeneratörler</li>
                                <li>Konferans sistemleri, monitör ve projeksiyonlar</li>
                                <li>Profesyonel DJ ve sunucu ekipmanları</li>
                                <li>Düğün ve özel davetler için: Masa ve sandalye çeşitleri, bar masaları, dekoratif aksesuarlar</li>
                                <li>Çadır Kurulumu (açık hava organizasyonları için özel tasarım ve ölçülere uygun çözümler)</li>
                            </ul>
                            <p>
                                *Tüm kurulum ve söküm işlemleri, deneyimli teknik ekibimiz tarafından yönetilir. Böylece
                                etkinliklerinizin her aşamasında maksimum konfor ve kalite garanti altına alınır.
                            </p>
                        </Tab>
                    </Tabs>
                </motion.div>
            </section>
            <section className={'vh100 position-relative'}>
                <footer>
                    <div className={'container py-3 py-md-5'}>
                        <div className={'row g-4'}>
                            <motion.div
                                initial={{opacity: 0, x: -200}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 1}}
                                id={'vizyon'} className={'col-12 col-md-6'}>
                                <h3 className={'text-white text-uppercase'}>vİzyon</h3>
                                <p className={'text-white mb-0 text-justify'}>
                                    Türkiye’nin dört bir yanında elde ettiğimiz başarıları daha da ileriye taşıyarak,
                                    organizasyon sektöründe ilk akla gelen, yenilikçi ve güvenilir çözüm ortağı olmak.
                                    Sektörel gelişmeleri yakından takip ederek, etkinlik deneyimini sürekli dönüştüren
                                    ve
                                    zenginleştiren bir marka haline gelmek.
                                </p>
                                <h3 className={'text-white text-uppercase mt-3'}>MİSYON</h3>
                                <p className={'text-white mb-0 text-justify'}>
                                    Kurumsal ciddiyetle bireysel samimiyeti harmanlayan bir anlayışla; etkinlik
                                    sahiplerinin
                                    hayal ettiği atmosferi, teknik yeterlilik ve yaratıcı dokunuşlarla gerçeğe
                                    dönüştürmek.
                                    Hangi ölçekte olursa olsun, her organizasyona aynı özveriyle yaklaşarak güven,
                                    kalite ve
                                    memnuniyet sunmak. </p>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, x: 200}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 1}}
                                id={'form'} className={'col-12 col-md-6'}>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="floatingInputName"
                                            placeholder="Adınız Soyadınız"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="floatingInputName">Adınız Soyadınız</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            id="floatingInputPhone"
                                            placeholder="Telefon Numaranız"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="floatingInputPhone">Telefon Numaranız</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="floatingTextarea2"
                                        placeholder="Mesajınız"
                                        style={{height: '120px'}}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                        <label htmlFor="floatingTextarea2">Mesajınız</label>
                                    </div>

                                    <div className="form-floating text-end">
                                        <button type="submit" className="btn submitBtn px-3 rounded-3">Gönder</button>
                                    </div>
                                </form>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 1}}
                                className={'col-12 col-md-12'}>
                                <a href={'https://maps.app.goo.gl/tNsV7X2LyCunNZnm7'} target={'_blank'}>
                                    <p className={'text-white text-center mb-1 fs-4'}>KIRMACI MAH. HASAN CANVER CAD.
                                        NO:47/A KDZ.EREĞLİ</p>
                                </a>
                                <a href={'tel:903723230532'} target={'_blank'}>
                                    <p className={'text-white text-center mb-1 fs-4'}>0372 323 0 532</p>
                                </a>
                                <p className={'text-white text-center mb-0'}>
                                    &copy; 2025 Tims Organizasyon. Tüm hakları saklıdır.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </footer>

                {/* Toast container */}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </section>
        </>
    );
};

export default Footer;
