import styled from "styled-components";

export const StyledFileUpload = styled.div`
  #inputfield, #button {
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: none;
  }

  label {
    cursor: pointer;
  }

  .label-container {
    display: flex;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.secondaryBorder};
  }

  .input-label {
    padding: 10px;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.colors.title};

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }

  .submit-label {
    padding: 10px 30px 10px 30px;
    background-color: ${props => props.theme.colors.secondaryAccent};
    color: ${props => props.theme.colors.link};

    &:hover {
      background-color: ${props => props.theme.colors.link};
      color: white;
    }
  }

  @media ${props => props.theme.devices.mobileL} {
    .label-container {
      flex-wrap: wrap;
    }

    .submit-label {
      width: 100%;
      text-align: center;
    }
  }
`;
