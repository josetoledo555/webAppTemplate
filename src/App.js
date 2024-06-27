import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: '',
      date:'',
      product:'',
      quantity:'',
      amount:'',
      showMessage:false
    };

    this.handleChangeInvoice = this.handleChangeInvoice.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeInvoice(event) {
    this.setState({invoice: event.target.value});
  }

  handleChangeDate(event) {
    this.setState({date: event.target.value});
  }

  handleChangeProduct(event) {
    this.setState({product: event.target.value});
  }

  handleChangeQuantity(event) {
    this.setState({quantity: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log(this.state.invoice);
    this.setState({showMessage: true});
    event.preventDefault();
  }

  render() {
    return (

     <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Invoice number:
          <input id="invoice" type="text" value={this.state.invoice} onChange={this.handleChangeInvoice} />
        </label>
        <br/>
        <label>
          Invoice Date:
          <input id="date" type="text" value={this.state.date} onChange={this.handleChangeDate} />
        </label>

        <br/>
        <label>
          Product:
          <input id="product" type="text" value={this.state.product} onChange={this.handleChangeProduct} />
        </label>

        <br/>
        <label>
          Quantity:
          <input id="quantity" type="text" value={this.state.quantity} onChange={this.handleChangeQuantity} />
        </label>

        <br/>
        <label>
          Amount:
          <input id="amount" type="text" value={this.state.amount} onChange={this.handleChangeAmount} />
        </label>   
        <br/>     
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <br/>
      {(this.state.showMessage)?
      <div id="message">SUCCESS MESSAGE, invoice  {this.state.invoice}  has been created 
        <br/>
        
      </div>:null}
      </div> 


    );
  }
}

function App() {
  const value = 'World';
  return <NameForm/>;
}

export default App;

