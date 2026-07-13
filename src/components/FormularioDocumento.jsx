import { useState } from 'react';

export default function FormularioDocumento() {
    // Acá van declaras las useState para los campos

    // Estado para el checkbox (empieza en false porque usualmente se paga el total)
    const [tieneAdelanto, setTieneAdelanto] = useState(false);

    // Estado para los datos (un objeto con valores vacíos al principio)
    const [datos, setDatos] = useState({
        edifName: '',
        proovName: '',
        tipoDocumento: '', // valor inicial del select
        importeTotal: '',
        autorizadoPor: '',
        estadoDocumento: 'Impago'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,       // Copia lo que ya estaba escrito en los otros campos
            [name]: value   // Reemplaza solo el campo que cambió
        });
    };

    return (
        <form>
            {/* Acá tengo que ir poniendo los <input>, <select> y demás para ir llenando el formulario */}
                <h2>Nuevo Documento</h2>
                <label>
                    Nombre del edificio: <input name="edifName" />
                </label>
                <hr />
                <label>
                    Nombre del proveedor: <input name="proovName" />
                </label>
                <hr />
                <label>
                    Tipo de documento: <select name="seleccionTipoDocumento">
                        <option value="tipoFactura">Factura</option>
                        <option value="tipoPresupuesto">Presupuesto</option>
                    </select>
                </label>
                <hr />
                <label>
                    ¿Se pagó adelanto?
                    <input
                        type="checkbox"
                        checked={tieneAdelanto}
                        name="adelantoSi"
                        onChange={() => setTieneAdelanto(!tieneAdelanto)} />
                </label>
                <hr />
                <label>
                    Importe total: <input type="number" name="importeTotal" />
                </label>
                <hr />
                <label>
                    Autorizado por: <input name="autorizadoPor" />
                </label>
                <hr />
                <label>
                    Estado del documento:
                    <select>
                        <option value="docImpago">Impago</option>
                        <option value="docPago">Pago</option>
                        <option value="saldoPendiente">Saldo pendiente</option>
                    </select>
                </label>

                <hr />
                <button type="submit">Generar documento</button>
        </form>
    )

}