import styled from "styled-components";
// import theme from "config/utils/theme";
import { S_DEVICES_WIDTH } from "config/utils/constant";

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${S_DEVICES_WIDTH}) {
    padding: 0px 10px;
  }
`;

export const CropperWrapper = styled.div`
  /* background-color: #000; */
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;

  @media (max-width: ${S_DEVICES_WIDTH}) {
    height: 250px;
  }
`;
