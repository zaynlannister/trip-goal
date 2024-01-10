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
        <a className="custom-link" href="/">
          Home
        </a>
        <a className="custom-link" href="/">
          About
        </a>
        <a className="custom-link" href="/">
          Packages
        </a>
        <a className="custom-link" href="/">
          Contact Us
        </a>
        <a className="custom-link" href="/">
          FAQ
        </a>
      </div>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  left: -600%;
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
