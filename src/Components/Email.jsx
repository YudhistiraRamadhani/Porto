import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import email from '/src/assets/email.png';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xorordb', 'template_nqlb2sp', form.current, 'Nq2h6H4m27Mw3KyKj')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
    };

    return (
        /* Latar belakang halaman luar menggunakan warna #eef0f3 */
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: '#eef0f3' }}>
            <div className="container">
                {/* Card Utama Pembungkus dengan Efek Modern */}
                <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-white p-4 p-lg-5">
                    <div className="row align-items-center">
                        
                        {/* Kolom Kiri: Ilustrasi / Gambar */}
                        <div className="col-lg-6 text-center mb-4 mb-lg-0 p-4">
                            <div className="p-3 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
                                <img 
                                    src={email} 
                                    alt="Contact Illustration" 
                                    className="img-fluid py-3" 
                                    style={{ maxHeight: '320px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Kolom Kanan: Form Contact */}
                        <div className="col-lg-6 px-lg-4">
                            <div className="mb-4">
                                <h2 className="fw-bold text-dark mb-2">Get in touch</h2>
                                <p className="text-muted small">Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan Anda melalui form di bawah ini.</p>
                            </div>
                            
                            <form ref={form} onSubmit={sendEmail}>
                                {/* Input Name */}
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        name="user_name" 
                                        required 
                                        className="form-control form-control-lg bg-light border-0 rounded-pill px-4 py-3 fs-6"
                                        placeholder="Name"
                                    />
                                </div>

                                {/* Input Email */}
                                <div className="mb-3">
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        required 
                                        className="form-control form-control-lg bg-light border-0 rounded-pill px-4 py-3 fs-6"
                                        placeholder="Email"
                                    />
                                </div>

                                {/* Input Subject */}
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        required 
                                        className="form-control form-control-lg bg-light border-0 rounded-pill px-4 py-3 fs-6"
                                        placeholder="Subject"
                                    />
                                </div>

                                {/* Textarea Message */}
                                <div className="mb-4">
                                    <textarea 
                                        name="message" 
                                        required 
                                        rows="4"
                                        className="form-control bg-light border-0 rounded-4 px-4 py-3 fs-6"
                                        placeholder="Message"
                                        style={{ resize: 'none' }}
                                    />
                                </div>

                                {/* Button Submit */}
                                <div className="d-grid">
                                    <button 
                                        type="submit" 
                                        className="btn btn-success btn-lg rounded-pill py-3 shadow-sm fw-semibold d-flex justify-content-center align-items-center gap-2"
                                        style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                                    >
                                        <span>Send Email</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;