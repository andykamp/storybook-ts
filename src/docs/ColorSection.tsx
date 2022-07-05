import React from "react";
import styled from "styled-components";
import { ColorRow } from "./ColorRow";
import { ColorRowSingle } from "./ColorRowSingle";
import { Grid, Text, Spacer } from "@geist-ui/core";
import { lt, dt } from "../design/theme";

const StyledContainer = styled.div``;

interface Props {}

export const ColorSection = ({}: Props) => {
  console.log("palette", lt, dt);

  return (
    <StyledContainer>
      <Grid.Container gap={2}>
        <Grid xs={24} md={12} direction={"column"}>
          <Text h4>Light theme</Text>
          <ColorRowSingle
            hex={lt.palette.background}
            name={"background"}
            themePath={"theme.palette.background"}
            isTopRow
            invert
          />
          <ColorRowSingle
            hex={lt.palette.accents_1}
            name={"accents_1"}
            themePath={"theme.palette.accents_1"}
            invert
          />
          <ColorRowSingle
            hex={lt.palette.accents_2}
            name={"accents_2"}
            themePath={"theme.palette.accents_2"}
            invert
          />
          <ColorRowSingle
            hex={lt.palette.accents_3}
            name={"accents_3"}
            themePath={"theme.palette.accents_3"}
          />
          <ColorRowSingle
            hex={lt.palette.accents_4}
            name={"accents_4"}
            themePath={"theme.palette.accents_4"}
          />
          <ColorRowSingle
            hex={lt.palette.accents_5}
            name={"accents_5"}
            themePath={"theme.palette.accents_5"}
          />
          <ColorRowSingle
            hex={lt.palette.accents_6}
            name={"accents_6"}
            themePath={"theme.palette.accents_6"}
          />
          <ColorRowSingle
            hex={lt.palette.accents_7}
            name={"accents_7"}
            themePath={"theme.palette.accents_7"}
          />
          <ColorRowSingle
            hex={lt.palette.accents_8}
            name={"accents_8"}
            themePath={"theme.palette.accents_8"}
          />
          <ColorRowSingle
            hex={lt.palette.foreground}
            name={"foreground"}
            themePath={"theme.palette.foreground"}
            isBottomRow
          />
        </Grid>

        <Grid xs={24} md={12} direction={"column"}>
          <Text h4>Dark theme</Text>
          <ColorRowSingle
            hex={dt.palette.background}
            name={"background"}
            themePath={"theme.palette.background"}
            isTopRow
          />
          <ColorRowSingle
            hex={dt.palette.accents_1}
            name={"accents_1"}
            themePath={"theme.palette.accents_1"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_2}
            name={"accents_2"}
            themePath={"theme.palette.accents_2"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_3}
            name={"accents_3"}
            themePath={"theme.palette.accents_3"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_4}
            name={"accents_4"}
            themePath={"theme.palette.accents_4"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_5}
            name={"accents_5"}
            themePath={"theme.palette.accents_5"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_6}
            name={"accents_6"}
            themePath={"theme.palette.accents_6"}
          />
          <ColorRowSingle
            hex={dt.palette.accents_7}
            name={"accents_7"}
            themePath={"theme.palette.accents_7"}
            invert
          />
          <ColorRowSingle
            hex={dt.palette.accents_8}
            name={"accents_8"}
            themePath={"theme.palette.accents_8"}
            invert
          />
          <ColorRowSingle
            hex={dt.palette.foreground}
            name={"foreground"}
            themePath={"theme.palette.foreground"}
            isBottomRow
            invert
          />
        </Grid>
      </Grid.Container>

      <Spacer h={4} />

      <Text h4>Success</Text>
      <ColorRowSingle
        hex={lt.palette.successLighter}
        name={"Lighter"}
        themePath={"theme.palette.successLighter"}
        invert
        isTopRow
      />
      <ColorRowSingle
        hex={dt.palette.successLight}
        hexLight={lt.palette.successLight}
        name={"Light"}
        themePath={"theme.palette.successLight"}
      />
      <ColorRowSingle
        hex={dt.palette.success}
        name={"Default"}
        themePath={"theme.palette.success"}
      />
      <ColorRowSingle
        hex={dt.palette.successDark}
        name={"Dark"}
        themePath={"theme.palette.successDark"}
        isBottomRow
      />

      <Spacer h={4} />

      <Text h4>Warning</Text>
      <ColorRowSingle
        hex={dt.palette.warningLighter}
        name={"Lighter"}
        themePath={"theme.palette.warningLighter"}
        isTopRow
        invert
      />
      <ColorRowSingle
        hex={dt.palette.warningLight}
        name={"Light"}
        themePath={"theme.palette.warningLight"}
      />
      <ColorRowSingle
        hex={dt.palette.warning}
        name={"Default"}
        themePath={"theme.palette.warning"}
      />
      <ColorRowSingle
        hex={dt.palette.warningDark}
        name={"Dark"}
        themePath={"theme.palette.warningDark"}
        isBottomRow
      />

      <Spacer h={4} />

      <Text h4>error</Text>
      <ColorRowSingle
        hex={dt.palette.errorLighter}
        name={"Lighter"}
        themePath={"theme.palette.errorLighter"}
        isTopRow
        invert
      />
      <ColorRowSingle
        hex={dt.palette.errorLight}
        name={"Light"}
        themePath={"theme.palette.errorLight"}
      />
      <ColorRowSingle
        hex={dt.palette.error}
        name={"Default"}
        themePath={"theme.palette.error"}
      />
      <ColorRowSingle
        hex={dt.palette.errorDark}
        name={"Dark"}
        themePath={"theme.palette.errorDark"}
        isBottomRow
      />

      <Spacer h={4} />

      <Text h4>Cyan</Text>
      <ColorRowSingle
        hex={dt.palette.cyanLighter}
        name={"Lighter"}
        themePath={"theme.palette.cyanLighter"}
        isTopRow
        invert
      />
      <ColorRowSingle
        hex={dt.palette.cyanLight}
        name={"Light"}
        themePath={"theme.palette.cyanLight"}
      />
      <ColorRowSingle
        hex={dt.palette.cyan}
        name={"Default"}
        themePath={"theme.palette.cyan"}
      />
      <ColorRowSingle
        hex={dt.palette.cyanDark}
        name={"Dark"}
        themePath={"theme.palette.cyanDark"}
        isBottomRow
      />

      <Spacer h={4} />

      <Text h4>Violet</Text>
      <ColorRowSingle
        hex={dt.palette.violetLighter}
        name={"Lighter"}
        themePath={"theme.palette.violetLighter"}
        isTopRow
        invert
      />
      <ColorRowSingle
        hex={dt.palette.violetLight}
        name={"Ligth"}
        themePath={"theme.palette.violetLight"}
      />
      <ColorRowSingle
        hex={dt.palette.violet}
        name={"Default"}
        themePath={"theme.palette.violet"}
      />
      <ColorRowSingle
        hex={dt.palette.violetDark}
        name={"Dark"}
        themePath={"theme.palette.violetDark"}
        isBottomRow
      />

      <Spacer h={4} />

      <Text h4>Higlight</Text>
      <ColorRowSingle
        hex={lt.palette.alert}
        name={"Alert"}
        themePath={"theme.palette.alert"}
        isTopRow
      />
      <ColorRowSingle
        hex={lt.palette.purple}
        name={"Purple"}
        themePath={"theme.palette.purple"}
      />
      <ColorRowSingle
        hex={lt.palette.magenta}
        name={"Magenta"}
        themePath={"theme.palette.magenta"}
      />
    </StyledContainer>
  );
};

ColorSection.defaultProps = {};
