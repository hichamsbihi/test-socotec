import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ConfirmationContainer = styled.div`
 font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: white;
  padding: 20px;
  width: 350px;
  max-width: 90%;
  
  h2 {
    margin-top: 0;
    margin-bottom: 15px;
  }
  
  p {
    margin-bottom: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  
  button {
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    
    &:first-of-type {
        background-color:${({ theme }) => theme.colors.primary};  
      }
      
      &:last-of-type {
       background-color:${({ theme }) => theme.colors.secondary};  
      }
  }
`;