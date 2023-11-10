import PrimaryButton from "../Buttons/PrimaryButton";
import FeedCarousel from "./FeedCarousel";
import styled from "styled-components";

const FeedSection = () => {
  return (
    <FeedStyled className="container">
      <div className="flex justify-between items-center mr-4 feed__content">
        <div>
          <p className="text-[#00B3A0] text-[13px] font-bold">Social Feed</p>
          <p className="text-[30px] font-bold feed__title">
            Check our instargram profile
          </p>
        </div>
        <div className="feed__button">
          <PrimaryButton>Follow us</PrimaryButton>
        </div>
      </div>
      <div>
        <FeedCarousel />
      </div>
    </FeedStyled>
  );
};

const FeedStyled = styled.div`
  @media (max-width: 760px) {
    .feed__content {
      display: block;
    }
    .feed__button {
      margin-top: 10px;
    }
  }
`;

export default FeedSection;
