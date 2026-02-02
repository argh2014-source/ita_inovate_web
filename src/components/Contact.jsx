import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contactez-moi</h2>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="contact-intro">
                            Vous souhaitez collaborer, échanger ou développer un projet ?
                            Je suis disponible pour toute opportunité de partenariat ou de consultation.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <Phone className="icon" size={24} />
                                <div>
                                    <h4>Téléphone</h4>
                                    <p>+229 01 97 68 07 03</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <Mail className="icon" size={24} />
                                <div>
                                    <h4>Email</h4>
                                    <p>argh2014@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <Linkedin className="icon" size={24} />
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p><a href="https://www.linkedin.com/in/h-ricardo-g-avlessi-1216071bb" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nom et Prénom</label>
                            <input type="text" id="name" placeholder="Votre nom et prénom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="ex : contact@organisation.org" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Décrivez brièvement votre besoin ou votre projet" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            <Send size={18} />
                            <span>Prendre contact</span>
                        </button>
                        <p className="form-note">Vos informations resteront strictement confidentielles.</p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
