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
        <Main
          funcionfoto={this.props.funcionfoto}
          foto={this.props.foto}
          visor={this.props.visor}
          titulo={this.props.titulos}
          skills={this.props.seleccion}
          reset={this.props.reset}
          handlerGithub={this.props.handlerGithub}
          handlerLinkedin={this.props.handlerLinkedin}
          handlerPhone={this.props.handlerPhone}
          handlerMail={this.props.handlerMail}
          handlerName={this.props.handlerName}
          handlerJob={this.props.handlerJob}
          changePalette={this.props.changePalette}
          changeTypography={this.props.changeTypography}
          placeholders={this.props.placeholders}
          />
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
