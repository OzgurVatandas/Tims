import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const { name, value } = e.target;
        if (name === 'phone') {
            const digitsOnly = value.replace(/\D/g, '');
            const formatted = formatPhone(digitsOnly);
            setFormData(prev => ({ ...prev, phone: formatted }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Telefon numarasını temizle, sadece rakamlar olsun
        const cleanPhone = formData.phone.replace(/\D/g, '');

        const dataToSend = { ...formData, phone: cleanPhone };

        emailjs.send('service_r08lmcf', 'template_hpufvf2', dataToSend, 'p6qEnH5Q_KojHiVBD')
            .then(() => {
                toast.success('Mesajınız gönderildi!');
                setFormData({ name: '', phone: '', message: '' });
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                toast.error('Gönderimde hata oluştu, lütfen tekrar deneyin.');
            });
    };

    return (
        <section className={'vh-100 position-relative'}>
            <footer>
                <div className={'container py-3 py-md-5'}>
                    <div className={'row g-4'}>
                        <div id={'hakkimizda'} className={'col-12 col-md-4'}>
                            <h3 className={'text-white text-uppercase'}>hakkımızda</h3>
                            <p className={'text-white mb-0 text-justify'}>
                                Tims Organizasyon olarak Karadeniz Ereğli’de yıllardır özel anlarınızı güzelleştirmek için çalışıyoruz. Düğün, nişan, doğum günü, kurumsal davet ya da festival fark etmeksizin her etkinliğe aynı özeni gösteriyor, hayalinizdeki atmosferi gerçeğe dönüştürüyoruz. Eğlenceyi, düzeni ve samimiyeti bir araya getirerek, davetlilerinizin unutamayacağı anlar yaratıyoruz. İşimizi severek yapıyor, ilk günkü heyecanımızla her detayı en ince ayrıntısına kadar planlıyoruz.
                            </p>
                        </div>
                        <div className={'col-12 col-md-4'}>
                            <h3 className={'text-white text-uppercase'}>vİzyon</h3>
                            <p className={'text-white mb-0 text-justify'}>
                                Bizim için her organizasyon bir hayalin başlangıcıdır. Vizyonumuz, sadece etkinlik düzenlemek değil; insanların hafızasında yer edecek, gülümseyerek hatırlayacakları deneyimler yaratmak. Gelişen dünyaya ayak uydurarak, yaratıcı ve yenilikçi çözümlerle fark yaratmayı hedefliyoruz. Müşterilerimizin güvenini kazanmak, onlara sadece hizmet değil dostluk sunmak önceliğimiz. Tims olarak her zaman “en özel anlarınıza değer katmak” için buradayız.
                            </p>
                        </div>
                        <div id={'form'} className={'col-12 col-md-4'}>
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
                                        style={{height: '200px'}}
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
                        </div>
                    </div>
                    <div className={'position-absolute w-100 bottom-0 start-0 py-3 py-md-5'}>
                        <p className={'text-white text-center mb-0'}>
                            &copy; 2025 Tims Organizasyon. Tüm hakları saklıdır.
                        </p>
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
    );
};

export default Footer;
