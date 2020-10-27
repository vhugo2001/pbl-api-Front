import React from "react";
import { Card } from "../../Components/Card/CardPrincipal";
import CardCadastroTarefa from '../../Components/Card/CardCadastroTarefa'
import ListagemAtividades from "../../pages/listagemAtividades/index"

function Dashboard() {
  return (
    <>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card>
            <h1>Quadro 1</h1>
          </Card>


          <CardCadastroTarefa />

        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* <Card>
            <h1>Quadro 3</h1>
          </Card> */}
          <ListagemAtividades />
          <Card>
            <h1>Quadro 4</h1>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
