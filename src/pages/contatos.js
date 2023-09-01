function Contatos() {
  return( 
    <div className="contact-page-wrapper" id="contatos">
      <h1 className="primary-heading">Tem alguma dúvida?</h1>
      <h1 className="primary-heading">Deixe-nos ajudá-lo</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="SeuEmail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
}

export default Contatos;