import styled from "styled-components";

export const StyledFileUpload = styled.div`
  #inputFile {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  label {
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    border-style: solid;
    border-width: 1px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.link};
    border-color: ${props => props.theme.colors.link};
    background-color: ${props => props.theme.colors.secondaryAccent};

    &:hover {
      color: ${props => props.theme.colors.title};
      background-color: ${props => props.theme.colors.link};
    }
  }
`;
