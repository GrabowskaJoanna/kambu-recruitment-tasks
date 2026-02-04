import Card from './Card.jsx';

const TopSection = () => (
    <section className="home-page__section">
        <header className="home-page__section--header">
            <h2>Headline 2</h2>
        </header>
        <div className="cards cards--top">
            <Card title="Headline 3" text="paragraph"/>
            <Card title="Headline 3" text="paragraph"/>
            <Card title="Headline 3" text="paragraph"/>
        </div>
    </section>
)
export default TopSection;
