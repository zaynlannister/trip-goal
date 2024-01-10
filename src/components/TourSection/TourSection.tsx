import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import styled from "styled-components";

const TourSection = () => {
  const navigate = useNavigate();

  return (
    <StyledTourSection id="packages" className="py-40">
      <div className="container tour-container">
        <div className="tour-content w-[50%] ml-auto">
          <p
            data-aos="fade-left"
            className="text-[#00B3A0] text-[13px] font-bold"
          >
            Take a tour
          </p>
          <p data-aos="fade-right" className="text-[30px] font-bold">
            Discover Our Travel Guideline
          </p>
          <p data-aos="fade-left" className="text-[#697687] py-4">
            For curious travelers who want to connect locally and go deeper into
            a place. Our Experiential Travel Guides highlight offbeat and local
            experiences that help you.
          </p>
          <PrimaryButton onClick={() => navigate("/info")} data-aos="fade-down">
            Start Now
          </PrimaryButton>
        </div>
      </div>
    </StyledTourSection>
  );
};

const StyledTourSection = styled.div`
  position: relative;

  .container {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    left: 0;
    background: url("/assets/img/tour-image.jpg") left/contain no-repeat;
    width: 100%;
  }

  &::after {
    right: 0;
    background: url("/assets/img/tour-vector.png") right/cover no-repeat;
    width: 80%;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1300px) {
    &::before,
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 775px) {
    &::before,
    &::after {
      background: unset;
    }
    & {
      padding: 40px 0;
    }
    .tour-content {
      width: 100%;
    }
  }
`;

export default TourSection;
