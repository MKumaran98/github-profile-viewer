import octacat from "../assets/github.svg";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

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

const EmptyTableText = styled.h2`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: ${({ $color }) => $color};
  margin: 0px;
`;

const TableEmptyState = ({ text }) => {
  const { palette } = useTheme();
  return (
    <EmptyStateWrapper>
      <ImageTextWrapper>
        <img alt="octacat" src={octacat} height={300} width={300} />
        <EmptyTableText $color={palette.text.secondary}>{text}</EmptyTableText>
      </ImageTextWrapper>
    </EmptyStateWrapper>
  );
};

export default TableEmptyState;
