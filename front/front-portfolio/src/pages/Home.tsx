import '../App.css';
import Header from '../components/init/Header';
import Main from '../components/init/Main';
import Section from '../components/init/Section';
import Works from '../components/init/Works';
import ContactForm from '../components/init/ContactForm';
import Footer from '../components/init/Footer';

type HomeProps = {
  onSelectWork: (id: string) => void;
}

const Home = ({onSelectWork} :HomeProps) => {
  return (
    <>
      <Header />
      <Main />
      <Section />
      <Works onSelectWork={onSelectWork}/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
