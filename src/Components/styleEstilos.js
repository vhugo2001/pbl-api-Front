import styled from 'styled-components';

    export const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: #fff;
    border: 2px solid #356245;
    margin: 0.75em 0.75em;
    padding: 0.50em 1em;
    transition: 0.5s all ease-out;
    &:hover {
    background-color: #356245;
    color: white;
    }`

    export const ButtonSubmit = styled.button`
    text-decoration: none;
    cursor: pointer;
    background-color:  #002147;
    font-size: 16px;
    border-radius: 3px;
    color: white;
    border: 2px solid #002147;
    margin: 0.30em 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
    background-color:  #002147;
    color: white;
    }`

    


    export default Button;

