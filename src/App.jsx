import AppRouter from './router/AppRouter.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsappButton from './components/WhatsappButton/WhatsappButton.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
