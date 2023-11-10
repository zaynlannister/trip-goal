import StepComponent from "./StepComponent";
import styled from "styled-components";

const StepsSection = () => {
  return (
    <StyledStepsContainer className="container">
      <div data-aos="fade-down" className="text-center">
        <p className="text-[#00B3A0] font-bold text-[13px]">
          3 steps for the perfect trip
        </p>
        <p className="text-[30px] font-bold py-2">Find travel perfection</p>
        <p className="text-[#697687] w-[550px] m-auto steps-container__text">
          Naturally head of the class whenit comes to luxury travel planning,
          because we do more homework than anyone else
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-2 mt-12">
        <StepComponent
          img="Chat"
          title="Tell us what you want to do"
          content="Fill out a 2-minute questionnaire about how you like to travel"
        />
        <StepComponent
          img="Calendar"
          title="Share your travel preference"
          content="It all happends online,We recommend everything to your vision"
        />
        <StepComponent
          img="Star"
          title="We’ll give you recommendations"
          content="Once you’re happy with your final plan, We handle everything for you"
        />
      </div>
    </StyledStepsContainer>
  );
};

const StyledStepsContainer = styled.div`
  @media (max-width: 660px) {
    .steps-container__text {
      width: 100%;
    }
  }
`;

export default StepsSection;
