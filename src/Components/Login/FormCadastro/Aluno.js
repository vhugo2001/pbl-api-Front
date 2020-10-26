import React from 'react'

const Aluno = () => {
    return (
        <form action="/" method="post">
        <div class="top-row">
          <div class="field-wrap">
            <input placeholder="Nome" type="text" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <input placeholder="Matricula" type="text" required autocomplete="off" />
          </div>
        </div>
        <div class="field-wrap">

          <input placeholder="Email" type="email" required autoComplete="off" />
        </div>
        <div class="field-wrap">
          <input placeholder="Senha" type="password" required autocomplete="off" />
        </div>
        <div class="field-wrap">
          <input placeholder="Confirmar Senha" type="password" required autocomplete="off" />
        </div>
        <button type="submit" class="button button-block">
         enviar registro
        </button>
      </form>
    )
}

export default Aluno
