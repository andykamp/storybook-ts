import React, { useState } from "react";
import styled from "styled-components";
import { Card, Grid, Spacer } from "@geist-ui/core";
import { IconSearcher } from "./IconSearcher";
import { IconContainer } from "./IconContainer";
import * as ICONS from "@geist-ui/icons";

// list of all geist icons
const geistIcons = Object.keys(ICONS).map((key) => ({
  label: key,
  value: key,
}));

// list over icons used in this project
export const IconList = [...geistIcons];

const StyledContainer = styled.div``;
const StyledContent = styled.div``;

interface Props {}

export const Icons = ({}: Props) => {
  const [options, setOptions] = useState(IconList);
  const updateVisibleIcons = (options) => {
    setOptions(options);
  };

  const getIcon = (iconName): ReactElement => {
    const ComponentName = ICONS[iconName];
    if (!ComponentName) return null;
    return <ComponentName />;
  };
  return (
    <Card width="100%">
      <StyledContainer>
        <IconSearcher
          allOptions={IconList}
          onSelectedChange={updateVisibleIcons}
        />
        <Spacer h={1} />
        <StyledContent>
          <Grid.Container gap={1} justify="center">
            {options.map(({ label, value }) => {
              const icon = getIcon(label);
              return (
                <Grid key={label} xs={12} lg={6} gap={1}>
                  {icon && <IconContainer icon={icon} name={label} />}
                  {!icon && <div>not found</div>}
                </Grid>
              );
            })}
          </Grid.Container>
        </StyledContent>
      </StyledContainer>
    </Card>
  );
};

Icons.defaultProps = {};
