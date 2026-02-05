import Button from "./Button.jsx";

const TextSection = () => (
    <section className="home-page__text-section container fade-in-animation ">
        <h2 className="home-page__text-section--header">Headline 2</h2>
        <p className="home-page__text-section--text">
            Very long paragraph. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="home-page__text-section--buttons">
            <Button text="Button secondary" type="button" className="button button--primary"/>
            <Button text="Button secondary" type="button" className="button button--neutral"/>
        </div>

    </section>
)

export default TextSection;