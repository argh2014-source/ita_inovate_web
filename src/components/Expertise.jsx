import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, MessageSquare, GraduationCap, BarChart3, Sprout } from 'lucide-react';

const expertises = [
    {
        title: "Genre & Inclusion Économique",
        description: "Intégration systématique du genre et de l'âge dans les projets, autonomisation économique des femmes et des jeunes, prévention des VBG.",
        icon: <Users size={32} />
    },
    {
        title: "Cohésion Sociale",
        description: "Animation de cadres de concertation inclusifs, dialogue communautaire, gouvernance locale participative.",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Gestion Pacifique des Conflits",
        description: "Médiation foncière, agropastorale et intercommunautaire, prévention des crises sociales.",
        icon: <MessageSquare size={32} />
    },
    {
        title: "Renforcement de Capacités",
        description: "Formation des comités locaux, OSC, coopératives et groupements communautaires.",
        icon: <GraduationCap size={32} />
    },
    {
        title: "Suivi-Évaluation & Analyse",
        description: "Collecte et analyse de données sensibles au genre, reporting, capitalisation des bonnes pratiques.",
        icon: <BarChart3 size={32} />
    },
    {
        title: "Communication & Conseil Agricole",
        description: "Accompagnement technique des acteurs ruraux, structuration des filières et amélioration des moyens d'existence.",
        icon: <Sprout size={32} />
    }
];

const Expertise = () => {
    return (
        <section id="expertises" className="expertise bg-light">
            <div className="container">
                <h2 className="section-title">Domaines d'expertise</h2>
                <div className="expertise-grid">
                    {expertises.map((item, index) => (
                        <motion.div
                            key={index}
                            className="expertise-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="icon-wrapper">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
