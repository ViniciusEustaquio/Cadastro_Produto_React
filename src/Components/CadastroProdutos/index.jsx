
import { useState } from "react";
import { FormContanier, Input, Label, Text, Contanier, Select, Option, Button, TitleContanier } from "./Style";
import { useNavigate } from "react-router-dom";





export const MainForm = () => {
    
    
    const [selectOption, setSelectOption] = useState('sim');
    const [formaData, setFormData] = useState({
      Produto: '',
      Descricao: '',
      Valor: '',
      Disponivel: 'sim'
    })
    const [productList, setProductList] = useState([]);
    
    const Navigate = useNavigate();
    
    
    const handleChangeForm = (e) => {
      const {name, value} = e.target;
      
      setFormData({
        ...formaData, [name]: value
      })
      
    }
    
    const handleChange = (event) => {
      
        const {value} = event.target;
        setSelectOption(value);
        setFormData({
          ...formaData, Disponivel: value
        })
    }
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setProductList([...productList, formaData]);
      setFormData({
        Produto: '',
        Descricao: '',
        Valor: '',
        Disponivel: 'sim'
      })
      
      setSelectOption('sim')
    }
    
    const realFormat = {
      style: 'currency',
      currency: 'BRL'
  }
  
  const handleFinalize = () => {
    Navigate('/report', { state: productList });
  };
    
  return (
    <div>

        <TitleContanier>Cadastro de Produto</TitleContanier>
        
      <FormContanier onSubmit={handleSubmit}>
        <Contanier>
        <Label name="Produto">
         <Text> produto: </Text>
          <Input type="text" name="Produto" value={formaData.Produto} onChange={handleChangeForm}/>
        </Label>
        <Label name="Descricao">
       <Text>Descrição:</Text> 
          <Input type="text" name="Descricao" value={formaData.Descricao} onChange={handleChangeForm}/>
        </Label>
        <Label name="Valor">
        <Text>Valor:</Text>
          <Input type="text" name="Valor" value={formaData.Valor.toLocaleString('pt-BR', realFormat)} onChange={handleChangeForm}/>
        </Label>
        
        <Label name="Disponivel">
        <Text>Disponivel:</Text> 
        <Select name="choice" value={selectOption} onChange={handleChange} >
          <Option value="sim">Sim</Option>
          <Option value="nao">Não</Option>
        </Select>
        </Label>
        
        
        <Button type="submit">Cadastrar Produto</Button>
        </Contanier>
        <Button onClick={handleFinalize}>Finalizar Cadastro</Button>
      </FormContanier>
    </div>
    
  );
};
