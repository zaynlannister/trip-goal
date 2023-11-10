import logo from "/assets/img/logo.svg";
import FacebookIcon from "../Icons/FaceBook";
import LinkedInIcon from "../Icons/LinkedIn";
import TwitterIcon from "../Icons/Twitter";

const FooterSection = () => {
  return (
    <div className="container flex justify-between items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-2">
        <FacebookIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default FooterSection;
