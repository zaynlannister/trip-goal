import styled from "styled-components";
interface MobileMenuInterface {
  open: boolean;
  toggleMenu: () => void;
}

const MobileMenu = (props: MobileMenuInterface) => {
  return (
    <StyledMenu
      className={`bg-[#fff] absolute flex flex-col text-[22px] w-[100%] left-0 bottom-0 right-0 top-[80px] px-4 z-50 ${
        !props.open ? "" : "hidden-menu"
      }`}
    >
      <div onClick={props.toggleMenu} className="flex flex-col gap-6">
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
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  left: -100%;
  transition: 100ms all;
  a {
    font-size: 18px;
    border-bottom: 1px solid #ccc;
    padding: 10px 20px;
  }
  &.hidden-menu {
    left: 0;
  }
`;

export default MobileMenu;
