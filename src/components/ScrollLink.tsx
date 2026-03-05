function ScrollLink({ title }: { title: string }) {
    function scroll() {
        const section = document.querySelector(`#${title}`);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className='scroll-link animated-link' style={{ width: 'fit-content' }} onClick={scroll}>
            <h2 style={{ marginBottom: 0 }}>
                {title}
            </h2>
        </div>
    );
}

export default ScrollLink;
