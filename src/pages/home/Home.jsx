import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import City from "./city/City";
import PropertyType from "./property_type/PropertyType";
import BrowseProperty from "./BrowseProperty/BrowseProperty";
import FormRegister from "./FormRegister/FormRegister";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <City />
      <PropertyType />
      <BrowseProperty />
      <FormRegister />
      <Footer />
    </div>
  );
};

export default Home;
