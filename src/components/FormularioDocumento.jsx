import { useState } from 'react';

export default function FormularioDocumento() {
    // Acá van declaradas las useState para los campos

    // Estado para el checkbox (empieza en false porque usualmente se paga el total)
    const [tieneAdelanto, setTieneAdelanto] = useState(false);

    // Estado para los datos (un objeto con valores vacíos al principio)
    const [datos, setDatos] = useState({
        edifName: '',
        proovName: '',
        tipoDocumento: '',
        importeTotal: '',
        importeAdelanto: '',
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
    const saldoPendiente = Number(datos.importeTotal) - Number(datos.importeAdelanto);
    return (
        <form>
            {/* Acá tengo que ir poniendo los <input>, <select> y demás para ir llenando el formulario */}
            <h2>Nuevo Documento</h2>
            <label>
                Nombre del edificio: <input name="edifName" value={datos.edifName} onChange={handleChange}/>
            </label>
            <hr />
            <label>
                Nombre del proveedor: <input name="proovName" value={datos.proovName} onChange={handleChange}/>
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
                Importe total: <input type="number" name="importeTotal" value={datos.importeTotal} onChange={handleChange}/>
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
            {/* Acá va la condición de si tieneAdelanto es true, mostrar un mensaje */}
            {tieneAdelanto && (
                <div>
                    <hr />
                    <label>
                         Importe del adelanto: <input type="number" name="importeAdelanto" value={datos.importeAdelanto} onChange={handleChange}/>
                    </label>
                    <hr />
                    <label>
                        Fecha del pago del adelanto: <input type="date" name="fechaPagoAdelanto" />
                    </label>
                    <hr />
                    <label>
                        Fecha de pago del saldo: <input type="date" name="fechaPagoSaldo" /> o indicar cuándo se paga el saldo: <input type="text" name="textPagoSaldo" />
                    </label>
                    <hr />
                    <label>
                        Saldo pendiente a pagar: <strong>${saldoPendiente}</strong>
                    </label>
                </div>
            )}
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