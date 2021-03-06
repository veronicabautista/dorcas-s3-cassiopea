import React from 'react';

class CompDisena extends React.Component {
  render(){
    return (
      <fieldset className="fieldset__rellena div__rellena collapsible">
        <div className="fieldset__container--title">
          <span className="fieldset__rellena--keyboard">
            <i className="far fa-object-ungroup" />
            <h2 className="fieldset__title">{this.props.tituloDisena}</h2>
          </span>
          <span className="fieldset__rellena--arrow collapsible__label">
            <i className="fas fa-angle-up rotate" />
          </span>
        </div>
        <div className="diseña__colores collapsible__content">
          <h3 className="diseña__coloresfuentes uppercase">Colores</h3>
          <ul className="listadiseño">
            <li className="diseña__colores--option">
              <input
                value="1" id="azul"
                type="radio"
                className="diseña__colores--paleta diseña--radio"
                name="elección" onChange={this.props.changePalette} color={this.props.visor.palette == 1}
              />
              <div className="diseña__colores--colores1" />
              <div className="diseña__colores--colores2" />
              <div className="diseña__colores--colores3" />
            </li>
            <li className="diseña__colores--option">
              <input
                value="2" id="rojo"
                type="radio"
                className="diseña__colores--paleta diseña--radio"
                name="elección" onChange={this.props.changePalette} color={this.props.visor.palette == 2}
              />
              <div className="diseña__colores--colores4" />
              <div className="diseña__colores--colores5" />
              <div className="diseña__colores--colores6" />
            </li>
            <li className="diseña__colores--option">
              <input
                value="3" id="gris"
                type="radio"
                className="diseña__colores--paleta diseña--radio"
                name="elección" onChange={this.props.changePalette} color={this.props.visor.palette == 3}
              />
              <div className="diseña__colores--colores7" />
              <div className="diseña__colores--colores8" />
              <div className="diseña__colores--colores9" />
            </li>
          </ul>
        </div>
        <div className="diseña__colores collapsible__content">
          <h3 className="diseña__coloresfuentes uppercase">Fuentes</h3>
          <ul className="listadiseño">
            <li className="diseña__colores--option-fuentes diseña--texto1">
              <input
                value="1" id="ubuntu"
                type="radio"
                className="diseña--radio diseña--fuentes"
                name="elecciónText" onChange={this.props.changeTypography} typo={this.props.visor.typography == 1}
              />Ubuntu
            </li>
            <li className="diseña__colores--option-fuentes diseña--texto2">
              <input
                value="2" id="comicsans"
                type="radio"
                className="diseña--radio diseña--fuentes"
                name="elecciónText" onChange={this.props.changeTypography} typo={this.props.visor.typography == 2}
              />Comic Sans
            </li>
            <li className="diseña__colores--option-fuentes diseña--texto3">
              <input
                value="3" id="montserrat"
                type="radio"
                className="diseña--radio diseña--fuentes"
                name="elecciónText" onChange={this.props.changeTypography} typo={this.props.visor.typography == 3}
              />Montserrat
            </li>
          </ul>
        </div>
      </fieldset>
    );
  }
}

export default CompDisena;
