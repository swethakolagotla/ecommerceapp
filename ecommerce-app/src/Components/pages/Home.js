import React,{useState} from 'react'
import Header from "../Partials/Header";
import Banner from "../Partials/Banner";
import Productitems from "../Partials/Productitems";
import Footer from "../Partials/Footer";
 
const Home = () => {
    const [state, setState] = useState([]);
    const [productcount, setProductcount] = useState(0);
    const Addtocart = (title) => {
      setState([...state, title]);
    };
    const datacount = (length) => {
      setProductcount(length);
    };
  return (
    <div  >
      <Header state={state} productcount={productcount} />
      <Banner />
      <Productitems Addtocart={Addtocart} datacount={datacount} />
      <Footer />
    </div>
  );
}

export default Home