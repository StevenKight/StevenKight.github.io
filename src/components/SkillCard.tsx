import './styles/SkillCard.css';

interface SkillCardProps {
    img_path: string;
    title: string;
    ref_link?: string;
}

function SkillCard({ img_path, title, ref_link }: SkillCardProps) {
    return (
        <a href={ref_link}
            target={ref_link ? '_blank' : ''}
            rel="noopener noreferrer"
            className='skill-card'>
            <div className='skill-card-image'>
                <img src={img_path} alt={title + ' Image'} />
            </div>
            <div className='skill-card-title'>
                <h3>{title}</h3>
            </div>
        </a>
    );
}

export default SkillCard;
