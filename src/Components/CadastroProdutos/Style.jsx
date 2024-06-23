import styled from "styled-components";



export const FormContanier = styled.form`
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background: #d4d4aa;
    border-radius: 15px;
    
    &:hover {
        box-shadow: 0 0 10px 10px white;
    }
    width: 800px;
    height: 600px;
    
`

export const Contanier = styled.div`
    
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    
`

export const Select = styled.select`
    margin-left: 15px;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background: ${props => (props.value === "sim" ? "#33ff33" : props.value === "nao" ? "#ff0000" : "white")};
    font-weight: 600;
    font-size: 1rem;
`

export const Option = styled.option`
    font-weight: 600;
    font-size: 1rem;

`


export const Input = styled.input`
    
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
`

export const Label = styled.label`
    
    display: flex;
    flex-direction: row;
`

export const Text = styled.p`
    
    font-size: 1.5rem;
    font-weight: 800;
    
`


export const Button = styled.button`
    
    
    width: 100%;
    border: none;
    padding: 15px 25px;
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 800;
    border-radius: 15px;
    cursor: pointer;
    background-color: #00ff00;
    
    &:hover {
        filter: brightness(1.5);
        box-shadow: 0 0 10px 10px white;
    }
    
`

export const TitleContanier = styled.h1`


font-size: 3rem;
color: white;
display: flex;
justify-content: center;
margin-bottom: 30px;
font-weight: bold;
font-family: 'Permanent Marker', sans-serif;
letter-spacing: 3px;

`