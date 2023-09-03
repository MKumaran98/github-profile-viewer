import octacat from "../assets/github.svg";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { H2 } from "../base";

const EmptyStateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableEmptyState = ({ text }) => {
  const { palette } = useTheme();
  return (
    <EmptyStateWrapper>
      <ImageTextWrapper>
        <img alt="octacat" src={octacat} height={300} width={300} />
        <H2 color={palette.text.secondary}>{text}</H2>
      </ImageTextWrapper>
    </EmptyStateWrapper>
  );
};

export default TableEmptyState;
