import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  min-height: 100vh; 
  justify-content: flex-start;
`;

export const Title = styled.h1`

  padding-bottom: 10px; 
  text-align: center; 
  width: 100%;
font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  position: relative;
  
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
`;

export const Tab = styled.button<{ active: boolean }>`

  padding: 10px 20px;
  background-color: ${(props) => 
    props.active ? props.theme.colors.primary : "transparent"};
  color: ${(props) => 
    props.active ? "white" : props.theme.colors.text};
  border: none;
  border-bottom: 2px solid ${(props) => 
    props.active ? props.theme.colors.primary : "transparent"};
  cursor: pointer;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }
`;

