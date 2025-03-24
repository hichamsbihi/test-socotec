import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FormContainer = styled.form`
 font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: white;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  > div {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
    }
    
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
    }
  }
  
  .button-group {    
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
    
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
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 0;
`;