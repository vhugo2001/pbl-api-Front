import styled, { css } from "styled-components";

export const Container = styled.div`
display: flex;
height: 100%;
 flex-flow: wrap;
  background-color: #fff;
  border: 0;
  border-radius: 0.4167rem;
  box-shadow: 0 9px 23px rgba(0, 0, 0, 0.09), 0 5px 5px rgba(0, 0, 0, 0.06) !important;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  flex-grow: 1;
  background-color: #fff;
  border: 0;
  border-radius: 0.4167rem;
  box-shadow: 0 9px 23px rgba(0, 0, 0, 0.09), 0 5px 5px rgba(0, 0, 0, 0.06) !important;
  overflow: hidden;
`;

export const Breakrow = styled.div`
  flex-basis: 100%;
    height: 0;
`;
