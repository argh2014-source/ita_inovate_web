import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle } from 'lucide-react';

const engagements = [
    "La promotion de l'égalité de genre",
    "L'autonomisation économique des femmes et des jeunes",
    "La prévention des violences basées sur le genre",
    "La cohésion sociale et la paix communautaire",
    "Le dialogue inclusif et la gouvernance locale"
];

const Engagements = () => {
    return (
        <section id="engagements" className="engagements bg-primary text-white">
            <div className="container">
                <h2 className="section-title text-white">Engagements & Éthique</h2>

                <div className="engagements-content">
                    <motion.div
                        className="engagement-list-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Je m'engage activement pour :</h3>
                        <ul className="engagement-list">
                            {engagements.map((item, i) => (
                                <li key={i}>
                                    <Heart size={20} className="heart-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="ethics-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3>Éthique professionnelle</h3>
                        <p>
                            Confidentialité, transparence, responsabilité et recherche constante d'impact durable.
                        </p>
                        <div className="ethics-icons">
                            <CheckCircle size={40} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Engagements;
