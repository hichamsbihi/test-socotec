import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  td {
     font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export const StyledRow = styled.tr`
  &:hover {
    background-color:rgb(239, 232, 232);
  }
  
  button {
    margin-right: 8px;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    
    &:first-of-type {
      color:${({ theme }) => theme.colors.primary};
    }
    
    &:last-of-type {
      color:${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  
  button {
    margin: 0 5px;
    padding: 5px 10px;
    background: none;
    border: 1px solid #ddd;
    cursor: pointer;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;