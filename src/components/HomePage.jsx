import CardsSection from './CardsSection.jsx';

const HomePage = () => (
        <div className="home-page">
                <header className="home-page__header">
                    <div className="container">
                        <h1>Headline 1</h1>
                    </div>
                </header>
                <div className="container">
                    <main className="home-page__content">
                        <CardsSection className='cards cards--top'/>
                        <CardsSection className='cards cards--bottom'/>
                    </main>
                    <aside className="home-page__sidebar">
                        <header className="home-page__aside-header">
                            <h2>Headline 2</h2>
                        </header>
                    </aside>
                </div>
                <footer className="home-page__footer">
                    <div className="container">
                            <p>Footer</p>
                    </div>
                </footer>
        </div>
)

export default HomePage;