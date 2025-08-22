import '../App.css';
import Header from '../components/cafe/Header';
import HeaderImg from '../components/cafe/HeaderImg'
import Menu from '../components/cafe/Menu';
import Access from '../components/cafe/Access';
import Footer from '../components/cafe/Footer';

type Props = {
    onBack:() => void;
}
const Cafe = ({onBack}: Props) => {
    return(
    <>
        <Header />
        <HeaderImg />
        <Menu />
        <Access />
        <Footer />
    </>
    );
};

export default Cafe;