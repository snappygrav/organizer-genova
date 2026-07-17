import { useState } from 'react';
import FormularioDocumento from './components/FormularioDocumento';

export default function App() {
 
  // Primero creamos el estado que va a almacenar la lista de documentos y lo empezamos como un array vacío
  const [listaDocumentos, setListaDocumentos] = useState([]); //acá lo que hacemos es crear el estado de listaDocumentos y el modificador setListaDocumentos que va a ir cambiando el estado de listaDocumetnos conforme se haga ejecutar.

  // Ahora vamos a crear la función que se va a encargar de agregar un documento a esa lista
  const agregarDocumento = (nuevoDoc) => {
    // vamos a utilizar un operador llamado spread que se representa con ... y sirve para copiar los documentos anteriores y a su vez sumar al final de la lista el nuevo elemento.
    // también vamos a agregar un ID con Date.now()

    setListaDocumentos([...listaDocumentos, { ...nuevoDoc, id: Date.now() }]);
  };

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Organizer - Genova SRL</h1>

        {/* Al componente del formulario le vamos a pasar una función mediante el uso de una prop que se va a llamar 'alEnviar' y el nombre se lo ponemos nosotros en relación a lo que hace. Es decir, le ponemos 'alEnviar' ya que se activa al enviar el form. */}
        <FormularioDocumento alEnviar={agregarDocumento} />
        
        <hr style={{ margin: '40px 0' }} />
        

        {/* Acá vamos a poner la sección que va a encargarse de listar los documentos creados. */}
        <h2> Documentos Registrados </h2>
        {listaDocumentos.length === 0 ? (
        <p>No hay documentos cargados aún.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Edificio</th>
              <th>Proveedor</th>
              <th>Tipo</th>
              <th>Total</th>
              <th>Adelanto</th>
              <th>Saldo</th>
              <th>Estado</th>
              <th>Autorizó</th>
            </tr>
          </thead>
          <tbody>
            {listaDocumentos.map((doc) => (
              // Siempre que listamos cosas en React, el elemento padre necesita una 'key' única
              <tr key={doc.id}>
                <td>{doc.edifName}</td>
                <td>{doc.proovName}</td>
                <td>{doc.tipoDocumento === 'tipoFactura' ? 'Factura' : 'Presupuesto'}</td>
                <td>${doc.importeTotal}</td>
                <td>${doc.importeAdelanto}</td>
                <td>${doc.importeTotal-doc.importeAdelanto}</td>
                <td>{doc.estadoDocumento === 'docImpago' ? 'Impago' : doc.estadoDocumento === 'docPago' ? 'Pago' : 'Saldo pendiente'}</td>
                <td>{doc.autorizadoPor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
  ); 
}