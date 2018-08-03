import React from 'react';
import CompDisena from './CompDisena';
import CompRellena from './CompRellena';
import CompComparte from './CompComparte';
class Form extends React.Component {
  render(){
    return (
          <section className="editor">
            <CompDisena tituloDisena={this.props.title.nombreDisena}/>
            <CompRellena tituloRellena={this.props.title.nombreRellena} sect={this.props.skills}/>
            <CompComparte tituloComparte={this.props.title.nombreComparte} />
          </section>
    );
  }
}

export default Form;