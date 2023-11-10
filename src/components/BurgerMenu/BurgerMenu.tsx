import "./burger_menu.css";

interface BurgerMenuInterface {
  toggleMenu: () => void;
  open: boolean;
}

const BurgerMenu = (props: BurgerMenuInterface) => {
  return (
    <svg
      onClick={props.toggleMenu}
      className={`vbp-header-menu-button__svg vbp-header-menu-button ${
        props.open ? "menu-open" : ""
      }`}
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`top ${props.open ? "top-open" : ""}`}
        shapeRendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`middle ${props.open ? "middle-open" : ""}`}
        shapeRendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`bottom ${props.open ? "bottom-open" : ""}`}
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default BurgerMenu;
