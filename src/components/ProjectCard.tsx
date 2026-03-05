import './styles/ProjectCard.css';

interface ProjectCardProps {
    img_path: string;
    title: string;
    description: string;
    url?: string;
}

function ProjectCard({ img_path, title, description, url = '#' }: ProjectCardProps) {
    return (
        <a className='project-card' href={url} target="_blank" rel="noopener noreferrer">
            <img src={img_path} alt={title + ' Image'} />
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    );
}

export default ProjectCard;
