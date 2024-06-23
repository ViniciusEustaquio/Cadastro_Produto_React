import { useLocation, useNavigate } from "react-router-dom";
import { Table, TableHead, TableHeader, TableRow, TableCell, Title, Button} from "./Style";

export const Report = () => {
  const location = useLocation();
  const productList  = location.state;
  
  const Navigate = useNavigate();
  
  
  const handleNavigate = () => {
    Navigate('/')
  }

  return (
    <div>
 <Title>Relatório de Produto</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Produto</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Disponível</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {productList.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.Produto}</TableCell>
              <TableCell>{product.Descricao}</TableCell>
              <TableCell>{product.Valor}</TableCell>
              <TableCell>{product.Disponivel}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      
      <Button onClick={handleNavigate}>INICIO</Button>
    </div>
  );
};
