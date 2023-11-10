import React from "react";
import styled from "styled-components";
import PrimaryButton from "../Buttons/PrimaryButton";
import logo from "/assets/img/logo.svg";
import rocket from "/assets/img/rocket.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MobileMenu from "../BurgerMenu/MobileMenu";

const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };
  return (
    <StyledHeader className="container">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-8 header__nav">
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
        <div className="flex items-center gap-4">
          <PrimaryButton>Register</PrimaryButton>
          <div className="header__burger-menu hidden">
            <BurgerMenu open={open} toggleMenu={toggleMenu} />
            <MobileMenu open={open} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      <div className="flex gap-12 items-center mt-12 header-content">
        <div className="w-[50%] header-bg">
          <img
            className="header-img"
            src="/assets/img/header-bg.png"
            alt="img"
          />
        </div>
        <div className="w-[50%] header-content header-content__img">
          <p className="text-[#00B3A0] text-[13px] font-bold">Book now</p>
          <p className="font-bold text-[40px] header__title">
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
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  @media (max-width: 1025px) {
    .header__title {
      font-size: 30px;
    }
  }

  @media (max-width: 775px) {
    .header__burger-menu {
      display: block;
    }
    .header__nav {
      display: none;
    }
  }

  @media (max-width: 705px) {
    .header-content {
      //   display: block;
      //   flex-direction: column-reverse;
    }
    .header-bg {
      //   width: 100%;
      display: none;
    }
    .header-content {
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    .header-content {
      flex-direction: column-reverse;
    }
    .header-bg {
      width: 100%;
      display: block;
    }
    .header-content {
      width: 100%;
    }
  }
`;

export default Header;
