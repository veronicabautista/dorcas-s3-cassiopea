import React from "react";
import "../styles/main.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Pag extends React.Component {
  render() {
    return (
      <div className="container__all">
        <Header img={this.props.logoAwe} />
        <Main funcionfoto={this.props.funcionfoto} foto={this.props.foto} visor={this.props.visor} titulo={this.props.titulos} skills={this.props.seleccion} palette={this.props.palette} selectPalette={this.props.selectPalette} typography={this.props.typography} selectTypography={this.props.selectTypography} />
        <Footer
          copy={this.props.copyright}
          img={this.props.image}
          href={this.props.href}
        />
      </div>
    );
  }
}

export default Pag;
