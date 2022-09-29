
import './App.css';
import Navbar from './Components/Home/Navbar';
import Carousel from './Components/Home/Carousel';
import OurProducts from './Components/OurProducts/OurProducts';
import OnlineOrders from './Components/OnlineOrders/OnlineOrders';
import Bevarages from './Components/Bevarages/Bevarages';
import Footer from './Components/Footer/Footer';
import CommentSection from './Components/CommentSection/CommentSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <OurProducts />
     <h3 className='online-orders'>Online Orders</h3> 
      <OnlineOrders />
      <Bevarages />
      <CommentSection />
      <Footer />
    </div>
  );
}

export default App;
