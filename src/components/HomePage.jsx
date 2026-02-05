import CardsSection from './CardsSection.jsx';
import List from './List.jsx';
import TextSection from './TextSection.jsx';
import Button from './Button.jsx';

const HomePage = ({
       onClick,
       text
}) => (
    <div className="home-page">
        <header className="home-page__header fade-in-animation">
            <div className="container">
                <h1>Headline 1</h1>
                <Button className="button" type="button" text={text} onClick={onClick}/>
            </div>
        </header>
        <TextSection/>
        <div className="container">
            <main className="home-page__content fade-in-animation">
                <CardsSection className="cards cards--top"/>
                <CardsSection className="cards cards--bottom"/>
            </main>
            <aside className="home-page__sidebar fade-in-animation">
                <header className="home-page__sidebar-header">
                    <h2>Headline 2</h2>
                </header>
                <List/>
            </aside>
        </div>
        <footer className="home-page__footer fade-in-animation">
            <div className="container">
                <p>Footer</p>
            </div>
        </footer>
    </div>
)

export default HomePage;