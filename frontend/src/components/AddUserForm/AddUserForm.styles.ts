import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
  font-family: ${({ theme }) => theme.fonts.main};
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px; 
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    
    button{
      grid-column: 1 / -1;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
      margin-top: 10px;
      cursor: pointer;
      font-family: ${({ theme }) => theme.fonts.main};
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 10px;
    
    input {
      width: auto;
      margin: 0;
    }
    
    label {
      font-family: ${({ theme }) => theme.fonts.main};
    }
  }
`;

export const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
  }
  
  input, select, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    font-family: ${({ theme }) => theme.fonts.main};
  }
`;

export const ErrorMessage = styled.p`
  color:#e74c3c;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-top: 5px;
  margin-bottom: 0;
`;