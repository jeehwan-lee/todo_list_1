import React from "react";
import styled from "styled-components";

const TodobodyBlock = styled.div`
  width: 512px;
  height: 600px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0;

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function Todobody({ children }) {
  return <TodobodyBlock>{children}</TodobodyBlock>;
}

export default Todobody;
