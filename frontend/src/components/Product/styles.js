import styled from "styled-components";

export const orders_list_container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 30px 80px 0px;
`;

export const orders_list_items = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 235px);
  grid-gap: 80px 15px;
  justify-content: space-between;
`;

export const order_card_container = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
`;

export const order_card_title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.015em;
  color: rgb(36, 18, 134);
  text-align: center;
`;

export const order_card_image = styled.div`
  padding-left: 20%;
  width:60%;
`;

export const updateBalance_button = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  border: 0px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  width: 100px;
  padding: 5px 5px 5px 5px;
  margin-top: 10px;
  margin-left: 50px;
  border-radius: 10px;
  background-color: var(--dark-color);
  `;

export const updateBalance_button_hover = styled.div`
  background-color: var(--primary-hover-color);
  transform: scale(1.09);
  `;
