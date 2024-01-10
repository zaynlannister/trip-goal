import React from "react";
import styled from "styled-components";
import logo from "/assets/img/logo.svg";
import MobileMenu from "../components/BurgerMenu/MobileMenu";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router-dom";
import InfoCard from "../components/InfoCard/InfoCard";
import Loader from "../components/Loader/Loader";
import ICard from "../interfaces";

const TopHeader = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [tours, setTours] = React.useState([]);
  const navigate = useNavigate();
  const URL = "/data.json";

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };

  const getAllToursData = React.useCallback(() => {
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setTours(res);
        });
    }, 1000);
  }, []);

  React.useEffect(() => {
    getAllToursData();
  }, [getAllToursData]);
  return (
    <StyledHeader className="container">
      <MobileMenu open={open} toggleMenu={toggleMenu} />
      <div className="flex justify-between items-center">
        <div data-aos="fade-right">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="header__image"
          />
        </div>
        <div data-aos="fade-down" className="flex gap-8 header__nav">
          <p className="header__title">Special Upcoming Offers</p>
        </div>
        <div data-aos="fade-left" className="flex items-center gap-4">
          <div className="header__burger-menu hidden">
            <BurgerMenu open={open} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {tours.length ? (
        <div className="info">
          <div className="info__container">
            {tours.map((item, index) => (
              <InfoCard key={index} {...(item as ICard)} />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 10px;
  .header {
    &__image {
      cursor: pointer;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .info {
    margin-top: 40px;

    &__container {
      --auto-grid-min-size: 280px;
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(var(--auto-grid-min-size), 1fr)
      );
      grid-gap: 40px;
    }
  }

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
    .header-bg {
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

export default TopHeader;
