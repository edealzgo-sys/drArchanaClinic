import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
const HomeAdmin = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"> 
   
   {h1 && <img src={h1} alt="H1" className="w-full h-full object-cover" />}
   {h2 && <img src={h2} alt="H2" className="w-full h-full object-cover" />}
   {h3 && <img src={h3} alt="H3" className="w-full h-full object-cover" />}
    </div>
    );
};
export default HomeAdmin;
