import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const certifications = [
    {
        title: "Master Professionnel en Agrosociologie et Économie",
        institution: "Université de Parakou – Mention Très Bien",
        type: "academic"
    },
    {
        title: "Licence en Économie et Sociologie Rurales",
        institution: "Université de Parakou – Mention Bien",
        type: "academic"
    }
];

const formations = [
    "Approche transformationnelle du genre (GTA)",
    "Prévention des Violences Basées sur le Genre",
    "Analyse communautaire",
    "Suivi-évaluation sensible au genre"
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications & Formations</h2>

                <div className="cert-grid">
                    <motion.div
                        className="cert-column"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Diplômes Académiques</h3>
                        <div className="cert-list">
                            {certifications.map((cert, i) => (
                                <div key={i} className="cert-item">
                                    <Award className="cert-icon" />
                                    <div className="cert-info">
                                        <h4>{cert.title}</h4>
                                        <p>{cert.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="cert-column"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Formations Complémentaires</h3>
                        <div className="training-list">
                            {formations.map((item, i) => (
                                <div key={i} className="training-item">
                                    <BookOpen className="training-icon" size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
