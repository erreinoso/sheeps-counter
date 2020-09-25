import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    //poner siempre con la funcion handle
    this.handleSheep = this.handleSheep.bind(this);
    // Crear estado inicial
    this.state = { counter: 0, text: 'Cuenta las ovejitas 🐑' };
  }

  // Función que suma unidades al contador
  handleSheep(ev) {
    // actualizar contador (necesitamos función callback porque nos basamos en el estado anterior)
    this.setState((prevState) => {
      let newCounter = prevState.counter++;
      console.log(prevState.text);
      if ((newCounter > 2) & (newCounter < 10)) {
        prevState.text = 'Ui, ¡otra oveja!';
      } else if ((newCounter > 10) & (newCounter < 15)) {
        prevState.text = '🐑🐑¡Difícil no perder la cuenta!🐑🐑';
      } else if (newCounter > 10) {
        prevState.text = '😴😌 ¡Qué sueño! 💤💤';
      }
      return { counter: newCounter };
    });
  }

  render() {
    return (
      <div className="sectionCounter">
        <p className="bigNumber">{this.state.counter}</p>
        <button className="button" onClick={this.handleSheep}>
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default SheepCounter;
