import PrimaryButton from "../Buttons/PrimaryButton";
import logo from "/assets/img/logo.svg";
import rocket from "/assets/img/rocket.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-8">
          <a className="custom-link" href="#home">
            Home
          </a>
          <a className="custom-link" href="#about">
            About
          </a>
          <a className="custom-link" href="#packages">
            Packages
          </a>
          <a className="custom-link" href="#contact">
            Contact Us
          </a>
          <a className="custom-link" href="#faq">
            FAQ
          </a>
        </div>
        <div>
          <PrimaryButton>Register</PrimaryButton>
        </div>
      </div>
      <div className="flex gap-12 items-center">
        <div className="w-[50%]">
          <img src="/assets/img/header-bg.png" alt="img" />
        </div>
        <div className="w-[50%]">
          <p className="text-[#00B3A0] text-[13px] font-bold">Book now</p>
          <p className="font-bold text-[40px]">
            Let’s Enjoy Your Trip with TripGoal{" "}
            <>
              <img className="inline mb-2 ml-2" src={rocket} alt="img" />
            </>
          </p>
          <p className="text-[#697687] py-4">
            Thinking of taking a break from every day's busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way?
          </p>
          <PrimaryButton>Start now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
