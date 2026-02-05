import CardsSection from './CardsSection.jsx';
import List from './List.jsx';

const HomePage = () => (
        <div className="home-page">
                <header className="home-page__header fade-in-animation">
                    <div className="container">
                        <h1>Headline 1</h1>
                    </div>
                </header>
                <div className="container">
                    <main className="home-page__content fade-in-animation">
                        <CardsSection className='cards cards--top'/>
                        <CardsSection className='cards cards--bottom'/>
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