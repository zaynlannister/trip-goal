import styled from "styled-components";
import ICard from "../../interfaces";

const InfoCard = (props: ICard) => {
  return (
    <StyledCard className="card">
      <img className="card__image" src={props.image} alt="img" />
      <div className="card-data">
        <p className="card__city">{props.cityName}</p>
        <p className="card__days">{props.duration} days</p>
      </div>
      <p className="card__price">
        Price: {props.price}$ <span>/ Person</span>
      </p>
      <div className="card-btn__container">
        <p>Darte: {props.date}</p>
        <button className="card__button">Book now</button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 12px;

  .card {
    &__image {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 10px;
    }

    &-data {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
    }

    &__city {
      font-weight: 600;
      font-size: 18px;
    }

    &__days {
      color: #767676;
      font-size: 16px;
    }

    &__price {
      font-weight: 600;

      & span {
        color: #767676;
        font-weight: 500;
      }
    }

    &-btn__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    &__button {
      color: #3e86f5;
      background-color: #f2f6ff;
      padding: 5px 16px;
      border-radius: 6px;
      transition: 100ms all;

      &:hover {
        background-color: #dde7ff;
      }
    }
  }
`;

export default InfoCard;
