import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Analyse communautaire et VCA",
    "Inclusion économique",
    "Gouvernance participative",
    "Gestion de crises",
    "Suivi-évaluation"
];

const tools = [
    "Microsoft Word, Excel, PowerPoint",
    "Power BI",
    "SPSS",
    "R"
];

const languages = [
    { name: "Français", level: "Expert" },
    { name: "Anglais", level: "Professionnel" }
];

const Skills = () => {
    return (
        <section id="competences" className="skills bg-light">
            <div className="container">
                <h2 className="section-title">Compétences & Outils</h2>

                <div className="skills-grid">
                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Compétences Techniques</h3>
                        <ul className="skill-tags">
                            {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Outils</h3>
                        <ul className="tool-list">
                            {tools.map((tool, i) => (
                                <li key={i}>{tool}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3>Langues</h3>
                        <div className="lang-list">
                            {languages.map((lang, i) => (
                                <div key={i} className="lang-item">
                                    <span className="lang-name">{lang.name}</span>
                                    <span className="lang-level">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
