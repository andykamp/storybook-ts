import styled from "styled-components";

export const StyledFullRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.palette.background};
`;

export const StyledFullCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.palette.background};
`;

export const StyledFullRowPadded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;

  background: ${(props) => props.theme.palette.background};
`;

export const StyledFullColPadded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;

  background: ${(props) => props.theme.palette.background};
`;

// ---------------------------------------------
// Playground component
// ---------------------------------------------

export const StyledPlayground = ({ children }) => {
  return (
    <StyledPlaygroundContainer>
      <StyledPlaygroundCard>{children}</StyledPlaygroundCard>
      <StyledPlaygroundBottom>
        Container made with &hearts;
      </StyledPlaygroundBottom>
    </StyledPlaygroundContainer>
  );
};

export const StyledPlaygroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.palette.accents_2};
    border-radius: 6px;
} 
`;
export const StyledPlaygroundCard = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
} 
`;
const StyledPlaygroundBottom = styled.div`
  border-top: 1px solid ${(props) => props.theme.palette.accents_2};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  font-size: 12px;
  padding: 0 20px;
  color: ${(props) => props.theme.palette.accents_4};
  background: ${(props) => props.theme.palette.accents_1};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
