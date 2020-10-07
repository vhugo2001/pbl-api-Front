import React, {useState } from 'react';
import './Components/App.css';
import DatePicker from 'react-date-picker';
import Button,{ButtonSubmit} from './Components/styleEstilos'
// import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [inicio, onChange] = useState(new Date());
  const [fim, onChange2] = useState(new Date());

  return (
    <div className="App" style={{height:'100%',width:'100%',position:'fixed'}}>
      <div className="navbar titulo"> 
      <img className="ufflogo" alt="foto do logo da Uff" src={require('./Components/uff-logo.png')} ></img>
        <div>
          <a href='/'><Button><b>O que é PBL</b></Button></a>
          <a href='/'><Button><b>Consultar PBL</b></Button></a>
          <a href='/'><Button><b>Cadastro</b></Button></a>
          <a href='/'><Button><b>Login</b></Button></a>
        </div>
      </div>

      <div className="sidenav">
        <h3 style={{color: '#f1f1f1'}}>Cadastro</h3>
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Alunos</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/">Cadastrar alunos</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">PBL</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="/">Iniciar PBL</a>
                    </li>
                    <li>
                        <a href="/">Cadastar PBL</a>
                    </li>
                    <li>
                        <a href="/">Cadastar tema do PBL</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Empresas</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="/">Cadastar Empresas</a>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
      

      <div className="container" style={{width:'50%'}}>
        <h2>Iniciar PBL</h2>
        <hr style={{backgroundColor: "#002147",width:'25%'}}></hr>
      </div>

      <div className="container" style={{width:'50%'}}>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Inserir Título do PBL</label>
            <input type="titulo" class="form-control" id="exampleInputEmail1"  placeholder="Titulo do PBL"/>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <label>Data de Inicio</label><br/>
              <DatePicker onChange={onChange} value={inicio}/>
            </div>

            <div className='col-sm'>
              <label>Data de Fim</label><br/>
              <DatePicker onChange={onChange2} value={fim}/>
            </div>

            <div className='col-sm' >
              <label>Empresa relacionada</label><br/>
              <select className="form-control"  name="empresasDropdown" style={{marginTop:-5}}>
                <option data-count="1" value="Nenhuma">Nenhuma</option>
                <option data-count="2" value="Empresa 1">Empresa 1</option>
                <option data-count="3" value="Empresa 2">Empresa 2</option>
                <option data-count="4" value="Empresa 3">Empresa 3</option>
                <option data-count="5" value="Empresa 4">Empresa 4</option>
                <option data-count="6" value="Empresa 5">Empresa 5</option>
                <option data-count="7" value="Empresa 6">Empresa 6</option>
                <option data-count="8" value="Empresa 7">Empresa 7</option>
                <option data-count="9" value="Empresa 8">Empresa 8</option>
                <option data-count="10" value="Empresa 9">Empresa 9</option>
                <option data-count="11" value="Empresa 10">Empresa 10</option>
                <option data-count="12" value="Empresa 11">Empresa 11</option>
              </select>
            </div>
          </div>

          <div className='row' style={{marginTop:10}}>
            <div className='col-sm-8' style={{marginTop:20}}>
              <textarea class="form-control" placeholder='Descreva a situacao Problema' rows="5"></textarea>
            </div>

            <div className='col-sm-4' style={{marginTop:20}} >
              <label>Tema relacionado</label><br/>
                <select className="form-control"  name="empresasDropdown" style={{marginTop:-5}}>
                  <option data-count="1" value="Tema  1">Tema 1</option>
                  <option data-count="2" value="Tema  2">Tema  2</option>
                  <option data-count="3" value="Tema  3">Tema  3</option>
                  <option data-count="4" value="Tema  4">Tema  4</option>
                  <option data-count="5" value="Tema  5">Tema  5</option>
                  <option data-count="6" value="Tema  6">Tema  6</option>
                  <option data-count="7" value="Tema  7">Tema  7</option>
                  <option data-count="8" value="Tema  8">Tema  8</option>
                  <option data-count="9" value="Tema  9">Tema  9</option>
                  <option data-count="10" value="Tema  10">Tema  10</option>
                  <option data-count="11" value="Tema  11">Tema  11</option>
                </select>
              </div>
          </div>
          
          <a href='/' ><ButtonSubmit style={{marginTop:20}}><b>Cadastrar</b></ButtonSubmit></a> 
          
        </form>
      </div>
 
     
     

      <div className="rodape">
        <p>Reitoria da UFF Rua Miguel de Frias, 9 - Icaraí, Niterói - RJ 24220-900<br></br>  
          CNPJ 28.523.215/0001-06 - Telefone: 21 2629-5000</p>
      </div>
    </div>
  );
}

export default App;