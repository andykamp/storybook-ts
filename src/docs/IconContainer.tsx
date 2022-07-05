import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import { Text, Card, Modal, Input, Snippet } from "@geist-ui/core";
import { Copy } from "@geist-ui/icons";

import { PACKAGE_NAME } from "../constants";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  name: string;
  icon: ReactElement;
}

export const IconContainer = ({ name, icon }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [importStatement] = useState(
    `import { ${name} } from '${PACKAGE_NAME}'`
  );

  const openHandler = () => {
    console.log("open", showModal);
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
    console.log("close", showModal);
  };

  return (
    <Card hoverable width="100%">
      <StyledContainer onClick={openHandler}>
        {icon}
        <Text small>{name}</Text>
      </StyledContainer>
      <Modal visible={showModal} onClose={closeHandler}>
        <Modal.Title>{name}</Modal.Title>
        <Modal.Content>
          <p>Import:</p>
          <Snippet text={importStatement} width="100%" />
        </Modal.Content>
      </Modal>
    </Card>
  );
};

IconContainer.defaultProps = {};
