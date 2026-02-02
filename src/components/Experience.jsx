import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Facilitateur Technique",
        organization: "Projet COSO (Banikoara)",
        description: "Mise en œuvre de l'approche transformationnelle du genre, prévention des VBG, cohésion sociale, médiation communautaire, suivi-évaluation sensible au genre."
    },
    {
        role: "Superviseur Départemental",
        organization: "Projet SWEDD / Banque Mondiale",
        description: "Coordination d'activités terrain, inclusion économique des femmes et des jeunes, autonomisation, gestion des risques sociaux, reporting."
    },
    {
        role: "Assistant Technique",
        organization: "PASDeR3 / Swisscontact",
        description: "Renforcement organisationnel des coopératives agricoles, gouvernance inclusive, intégration du genre, prévention des conflits."
    },
    {
        role: "Facilitateur Communautaire",
        organization: "UNICEF (ATPC/WASH)",
        description: "Mobilisation sociale, amélioration des conditions de vie, réduction des vulnérabilités sociales et économiques."
    }
];

const Experience = () => {
    return (
        <section id="experiences" className="experience">
            <div className="container">
                <h2 className="section-title">Expériences professionnelles clés</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="exp-dot"></div>
                            <div className="exp-content">
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-org">{exp.organization}</h4>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
