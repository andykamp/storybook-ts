import React, { ReactElement } from "react";
import styled from "styled-components";
import { Image, Card, Text } from "@geist-ui/core";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

const StyledImage = styled(Image)`
  margin-right: 15px !important;
`;

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  hoverable: boolean;
  shadow: boolean;
}

export const WelcomeCard = ({
  imgSrc,
  title,
  description,
  hoverable,
  shadow,
}: Props) => {
  return (
    <Card width="100%" hoverable={hoverable} shadow={shadow}>
      <StyledContainer width="100%">
        <StyledImage width="60px" height="60px" src={imgSrc} />
        <StyledContent>
          <Text h4 my={0}>
            {title}
          </Text>
          <Text>{description}</Text>
        </StyledContent>
      </StyledContainer>
    </Card>
  );
};

WelcomeCard.defaultProps = {
  imgSrc: "",
  title: "Some title",
  description: "Some descripton...",
  hoverable: false,
  shadow: false,
};
