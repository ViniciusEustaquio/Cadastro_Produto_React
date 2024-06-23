import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeader = styled.th`
  padding: 12px;
  border: 1px solid #dddddd;
`;

export const TableRow = styled.tr`
  
    background-color: #f9f9f9;
  
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #dddddd;
`;


export const Title = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 3rem; 
`

export const Button = styled.button`
  
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 8px;
  cursor: pointer;
  
  &:hover {
        filter: brightness(1.5);
        box-shadow: 0 0 10px 10px white;
    }
  
`