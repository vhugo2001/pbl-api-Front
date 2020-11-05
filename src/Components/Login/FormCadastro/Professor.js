import React from 'react'

const Professor = () => {
    return (
        <form action="/" method="post">
        <div className="top-row">
          <div className="field-wrap">
            <input placeholder="Nome" type="text" required autoComplete="off" />
          </div>

          <div className="field-wrap">
            <input placeholder="Disciplina" type="text" required autoComplete="off" />
          </div>
        </div>
        <div className="field-wrap">

          <input placeholder="Email" type="email" required autoComplete="off" />
        </div>
        <div className="field-wrap">
          <input placeholder="Senha" type="password" required autoComplete="off" />
        </div>
        <div className="field-wrap">
          <input placeholder="Confirmar Senha" type="password" required autoComplete="off" />
        </div>
        <button type="submit" className="button button-block">
         enviar registro
        </button>
      </form>
    )
}

export default Professor