import { LitElement, html } from 'lit-element';
import { CellsPage } from '@cells/cells-page';
//import { css } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import { CellsElement } from '@cells/cells-element';

import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default';
import '@bbva-web-components/bbva-core-select';
import '@bbva-web-components/bbva-core-input';
import '@bbva-web-components/bbva-notification-contextual';
import '@bbva-web-components/bbva-form-date';
import '@bbva-web-components/bbva-form-select';
import '@bbva-web-components/bbva-form-number';
import '@bbva-web-components/bbva-form-field';
import '@bbva-web-components/bbva-form-field';
import '@bbva-web-components/bbva-web-header-landing/bbva-web-header-landing';

class TurnosPage extends CellsPage {
  static get optionTag() {
return 'turnos-page';
}

static get properties() {
    return {
     counter: { type: Number }   
    };
}

constructor() {
    super();

    this.counter= 0;
    
}

render() {
return html`

      <style>
          p {
              background-color:#002171 ;
              height: 50px;
            }
          h2 {
              color: #5472d3;
            }   
          h3 {
              color: #5472d3;
          }  
          h4 {
              color: #5472d3;
          } 

  
      </style>
     
      <p>Header</p>
        <h2>Turnos On line</h2>
       
        <bbva-notification-contextual icon-close="" head-title="Recorda que como muchos de nosostros, 
        tu ofical puede estar trabajando desde su casa
        .Podes contactarlo/a sin acercarte a la sucursal, encontra los datos de tu oficial en el link
        ~Atencion al cliente~ de la pagina de inicio de NetCash." body-text="">
        </bbva-notification-contextual>
    <form>
    
    <bbva-form-select>
        <bbva-form-option value="Empresa 1">Empresa 1</bbva-form-option>
        <bbva-form-option value="Empresa 2">Empresa 2</bbva-form-option>
        <bbva-form-option value="Empresa 3">Empresa 3</bbva-form-option>
    </bbva-form-select>
        
        <h3>Datos del Turno</h3><br/>

        <h4>Elegí la sucursal donde querés ser atendido</h4><br/>
        <bbva-form-select label="Selecciona una sucursal">
          <bbva-form-option value="Avellaneda">Avellaneda</bbva-form-option>
          <bbva-form-option value="Capital">Capital</bbva-form-option>
          <bbva-form-option value="Salta">Jujuy</bbva-form-option>
          <bbva-form-option value="Jujuy">Jujuy</bbva-form-option>
          <bbva-form-option value="Mendoza">Jujuy</bbva-form-option>
        </bbva-form-select>
                  
                    
        <h4>Elegí que día queres ser atendido</h4><br/>
        <div class="case">
            <bbva-form-date label="" label-out="" required=""></bbva-form-date>
        </div>
                  
        <h4>Elegí el tipo de trámite a realizar</h4>
    
        <label><input type="radio" name="native" value="1"><span>Caja</span></label><br/>
        <bbva-text text="Depositos y Extracciones de moneda extrajera y depositos de cheques que no pueden ser depositados en medios automaticos" size="3XS"></bbva-text>
        <label><input type="radio" name="native" value="2"><span>Operativo</span></label><br/>
        <bbva-text text="Retiro de Token.Claves.Certificado de plazos fijos.Entregaa de documentación(Certificado de plazos fijos,garantias,comex,formularios de instrumentacion de operciones de credito).Acceso a cajas de seguridad.Pago a Proveedores" size="3XS"></bbva-text>
        <label><input type="radio" name="native" value="3"><span>Comercial</span></label><br/>
        <bbva-text text="Financiaciones.Adquiriencia.Cheques.Pago de haberes.Inversiones.Otros." size="3XS"></bbva-text>

        <h3>Datos de la persona que concurrirá a la sucursal</h3>
<bbva-notification-contextual icon-close="" head-title="Vamos a emitir el permiso de circulación con
 los datos que completes a continuación." body-text="">
</bbva-notification-contextual>
 


<bbva-text text="Nombre completo" size="S"></bbva-text>
  <div class="case">
  <bbva-form-field label="Nombre Completo" required=""></bbva-form-field>
  </div>

<bbva-text text="Tipo de documento" size="S"></bbva-text>
        <bbva-form-select label="Tipo de documento">
          <bbva-form-option value="DNI">DNI</bbva-form-option>
          <bbva-form-option value="LE">LE</bbva-form-option>
          <bbva-form-option value="CI">CI</bbva-form-option>
          <bbva-form-option value="DNE">DNE</bbva-form-option>
          <bbva-form-option value="Pasaporte">Pasaporte</bbva-form-option>
        </bbva-form-select>

<bbva-text text="Numero de Documento" size="S"></bbva-text>
   <br class="case">
   <bbva-form-number label="Numero de documento" required=""></bbva-form-number>
   </div>
   <div class="solicitar">
     <bbva-button-default @click="${this.saludar}" variant="primary">Solicitar Turno</bbva-button-default>
   </div>
   
</form>


     
      

        `;

    }
    saludar(){
        alert("Descargar PDF")
    
    }

}
customElements.define('turnos-page', TurnosPage);
