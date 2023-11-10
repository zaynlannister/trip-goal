import Header from "./components/Header/Header";
import StepsSection from "./components/StepsSection/StepsSection";

const App = () => {
  return (
    <div>
      <div className="bg-[#F8F8F8] pt-4 pb-20">
        <Header />
      </div>
      <div className="bg-[#ffff] py-10">
        <StepsSection />
      </div>
    </div>
  );
};

export default App;
