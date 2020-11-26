import styled from "styled-components";

export const Container = styled.div`    

    width: 30rem;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    padding: 1rem;       
    
    form input, textarea{               
        margin-bottom: 1rem;
        width: 28rem; 
        border-radius: 5px;
        box-shadow: 0 1px 0 0 #d2d2d2;
        -webkit-box-shadow: 0 1px 0 0 #d2d2d2; 
    } 
    
    form input, input{
        font-size: 1.3rem; 
    }

    button {
        border-radius: 3px;
        border: none;
        width: 8rem;
        height: 2rem;        
        background-color: #07a7e3;
        box-shadow: 0 1px 0 0 #d2d2d2;
    }

    button:hover{
        background-color: #8ebfed;
        transition: 0.5s;
    }

    form h6 {
        color: #fff;        
        line-height: 2rem;
        font-weight: bold;      
    }
`

export const ButtonArea = styled.div`

    button{
        margin-right: 12.5rem;
    }
    
    .icon{
        margin-right: 0.6rem;        
        width: 1.2rem;
        height: 1.2rem;
    }

    .icon:hover{
        cursor: pointer;
    }

`


