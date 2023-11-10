import styled from "styled-components";

const StepComponent = (props: {
  title: string;
  content: string;
  img: string;
}) => {
  return (
    <StyledStep className="flex flex-col items-center text-center p-4 border-[1px] border-[#F8F8F8] w-[320px]">
      <div>
        <img src={`assets/img/${props.img}.png`} alt="img" />
      </div>
      <div>
        <p>{props.title}</p>
        <p className="text-[#697687]">{props.content}</p>
      </div>
    </StyledStep>
  );
};

const StyledStep = styled.div`
  @media (max-width: 1025px) {
    & {
      width: 100%;
    }
  }
`;

export default StepComponent;
