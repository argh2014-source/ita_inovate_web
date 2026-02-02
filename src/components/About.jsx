import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="a-propos" className="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">À propos de moi</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Je suis <strong>Ricardo AVLESSI</strong>, agroéconomiste et agrosociologue spécialisé en développement et aménagement rural.
                                Titulaire d’un Master Professionnel en Agrosociologie et Économie, option communication et conseil agricole,
                                je dispose d’une solide expérience dans la mise en œuvre de projets de développement communautaire,
                                d’inclusion économique et de cohésion sociale.
                            </p>
                            <p>
                                Mon parcours m’a permis d’intervenir sur des problématiques complexes liées au genre, à la gouvernance locale,
                                à la prévention des violences basées sur le genre, ainsi qu’à la gestion pacifique des conflits.
                            </p>

                            <div className="vision-box">
                                <h3>Ma Vision</h3>
                                <p>
                                    Contribuer à un développement équitable et durable, fondé sur la participation communautaire,
                                    la justice sociale et la valorisation des capacités locales.
                                </p>
                            </div>
                        </div>

                        <div className="values-grid">
                            <h3>Mes Valeurs</h3>
                            <ul>
                                <li><strong>Inclusion et équité sociale</strong></li>
                                <li><strong>Participation communautaire</strong></li>
                                <li><strong>Responsabilité et redevabilité</strong></li>
                                <li><strong>Confidentialité et éthique professionnelle</strong></li>
                                <li><strong>Impact durable</strong></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
