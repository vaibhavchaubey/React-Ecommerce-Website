import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontext';

const About = () => {
  const {myName} = useProductContext();
  const data = {
    name: 'Thapa Ecommerce',
  };
  return (
    <>
      {myName}
      {/* hello hello*/}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
