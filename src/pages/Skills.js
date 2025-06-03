
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import SkillCard from '../components/SkillCard';

import './styles/Skills.css'

const SkillsList = {
    'Programming Languages': [
        { img_path: '/assets/images/logos/python-svgrepo-com.svg', title: 'Python', ref_link: 'https://www.python.org/' },
        { img_path: '/assets/images/logos/mysql-svgrepo-com.svg', title: 'MySQL', ref_link: 'https://www.mysql.com/' },
        { img_path: '/assets/images/logos/postgresql-svgrepo-com.svg', title: 'PostgreSQL', ref_link: 'https://www.postgresql.org/' },
        { img_path: '/assets/images/logos/rust-svgrepo-com.svg', title: 'Rust', ref_link: 'https://www.rust-lang.org/' },
        { img_path: '/assets/images/logos/javascript-svgrepo-com.svg', title: 'JavaScript', ref_link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { img_path: '/assets/images/logos/typescript-svgrepo-com.svg', title: 'TypeScript', ref_link: 'https://www.typescriptlang.org/' },
        { img_path: '/assets/images/logos/html-svgrepo-com.svg', title: 'HTML', ref_link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { img_path: '/assets/images/logos/css-svgrepo-com.svg', title: 'CSS', ref_link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { img_path: '/assets/images/logos/c.svg', title: 'C', ref_link: 'https://en.cppreference.com/w/c' },
        { img_path: '/assets/images/logos/cpp.svg', title: 'C++', ref_link: 'https://isocpp.org/' },
        { img_path: '/assets/images/logos/csharp.svg', title: 'C#', ref_link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { img_path: '/assets/images/logos/java-svgrepo-com.svg', title: 'Java', ref_link: 'https://www.java.com/' },
        { img_path: '/assets/images/logos/r-svgrepo-com.svg', title: 'R', ref_link: 'https://www.r-project.org/' },
        { img_path: '/assets/images/logos/matlab-svgrepo-com.svg', title: 'MATLAB', ref_link: 'https://www.mathworks.com/products/matlab.html' },
        { img_path: '/assets/images/logos/etc-svgrepo-com.svg', title: 'And More' }
    ],

    'Frameworks': [
        { img_path: '/assets/images/logos/react-svgrepo-com.svg', title: 'React', ref_link: 'https://react.dev/' },
        { img_path: '/assets/images/logos/react-svgrepo-com.svg', title: 'Native', ref_link: 'https://reactnative.dev/' },
        { img_path: '/assets/images/logos/dotnet-svgrepo-com.svg', title: 'ASP.Net', ref_link: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
        { img_path: '/assets/images/logos/tensorflow-svgrepo-com.svg', title: 'TensorFlow', ref_link: 'https://www.tensorflow.org/' },
        { img_path: '/assets/images/logos/keras-svgrepo-com.svg', title: 'Keras', ref_link: 'https://keras.io/' },
        { img_path: '/assets/images/logos/scikit-learn.svg', title: 'Scikit', ref_link: 'https://scikit-learn.org/' },
        { img_path: '/assets/images/logos/pandas-svgrepo-com.svg', title: 'Pandas', ref_link: 'https://pandas.pydata.org/' },
        { img_path: '/assets/images/logos/django-svgrepo-com.svg', title: 'Django', ref_link: 'https://www.djangoproject.com/' }
    ],
    
    'Operating Systems': [
        { img_path: '/assets/images/logos/linux-svgrepo-com.svg', title: 'Linux', ref_link: 'https://www.linux.org/' },
        { img_path: '/assets/images/logos/apple-svgrepo-com.svg', title: 'MacOS', ref_link: 'https://www.apple.com/macos/' },
        { img_path: '/assets/images/logos/windows-svgrepo-com.svg', title: 'Windows', ref_link: 'https://www.microsoft.com/windows' },
        { img_path: '/assets/images/logos/proxmox-svgrepo-com.svg', title: 'Proxmox', ref_link: 'https://www.proxmox.com/' }
    ],
    
    'Other Tools': [
        { img_path: '/assets/images/logos/git-svgrepo-com.svg', title: 'GIT', ref_link: 'https://git-scm.com/' },
        { img_path: '/assets/images/logos/ci-cd-svgrepo-com.svg', title: 'CI/CD', ref_link: 'https://github.blog/enterprise-software/ci-cd/' },
        { img_path: '/assets/images/logos/docker-svgrepo-com.svg', title: 'Docker', ref_link: 'https://www.docker.com/' },
        { img_path: '/assets/images/logos/kubernetes-svgrepo-com.svg', title: 'Kubernetes', ref_link: 'https://kubernetes.io/' },
        { img_path: '/assets/images/logos/aws-svgrepo-com.svg', title: 'AWS', ref_link: 'https://aws.amazon.com/' },
        { img_path: '/assets/images/logos/azure-svgrepo-com.svg', title: 'Azure', ref_link: 'https://azure.microsoft.com/' },
        { img_path: '/assets/images/logos/digital-ocean-svgrepo-com.svg', title: 'Digital Ocean', ref_link: 'https://www.digitalocean.com/' },
        { img_path: '/assets/images/logos/supabase.svg', title: 'Supabase', ref_link: 'https://supabase.com/' },
        { img_path: '/assets/images/logos/jira-svgrepo-com.svg', title: 'Jira', ref_link: 'https://www.atlassian.com/software/jira' },
        { img_path: '/assets/images/logos/azure-devops-svgrepo-com.svg', title: 'DevOps', ref_link: 'https://azure.microsoft.com/en-us/products/devops' },
        { img_path: '/assets/images/logos/figma-svgrepo-com.svg', title: 'Figma', ref_link: 'https://www.figma.com/' }
    ],
};


function Skills() {
    const groups = Object.keys(SkillsList);

    const [currentSection, setCurrentSection] = useState(0);

    const scrollLeft = () => {
        if (currentSection > 0) setCurrentSection(currentSection - 1);
    };

    const scrollRight = () => {
        if (currentSection < groups.length - 1) setCurrentSection(currentSection + 1);
    };

    return (
        <div className='skills'>
            <FontAwesomeIcon 
                className={`icon-button ${currentSection <= 0 ? 'disabled' : ''}`}
                icon={faCircleChevronLeft} 
                size='2x' 
                onClick={scrollLeft} />

            <div className='skills-container'>
                <div className='skills-content' style={{ transform: `translateX(-${currentSection * 100}%)` }}>
                    {
                        groups.map((group, index) => (
                            <div className='skills-group' key={index}>
                                <h2>{group}</h2>
                                <div className='skills-grid'>
                                    {
                                        SkillsList[group].map((skill) => {
                                            const isLast = skill.title === 'And More';

                                            return (
                                                <div
                                                    className={`skill-wrapper ${isLast ? 'always-show' : ''}`}
                                                    key={skill.title}
                                                >
                                                    <SkillCard
                                                        img_path={skill.img_path}
                                                        title={skill.title}
                                                        ref_link={skill.ref_link}
                                                    />
                                                </div>
                                        )})
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <FontAwesomeIcon 
                className={`icon-button ${currentSection >= Object.keys(SkillsList).length - 1 ? 'disabled' : ''}`} 
                icon={faCircleChevronRight} 
                size='2x' 
                onClick={scrollRight} />
        </div>
       
    );
}

export default Skills;
