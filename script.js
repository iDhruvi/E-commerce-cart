function Cart() {

  const products = [
  {
    Name: "Mascara",
    Price: 400 },

  {
    Name: "Eye Shadow Palette",
    Price: 750 },

  {
    Name: "Makeup Primer",
    Price: 500 },

  {
    Name: "Kajal - Deep Black",
    Price: 350 },

  {
    Name: "Cover Foundation",
    Price: 475 }];



  var productQty = [0, 0, 0, 0, 0];
  const [qty, setQty] = React.useState(productQty);

  var addQty = i => {
    setQty(qty.map((q, index) => index === i ? q + 1 : q));
  };

  var delQty = index => {
    setQty(qty.map((q, i) => q > 0 && i == index ? q - 1 : q));
  };

  var totalQty = () => {
    var totalqty = 0;
    qty.forEach(q => {
      totalqty += q;
    });
    return totalqty;
  };

  var totalAmt = () => {
    var totalamt = 0;
    var price = products.map(p => p.Price);
    qty.forEach((q, i) => {
      totalamt += q * price[i];
    });
    return totalamt;
  };

  return /*#__PURE__*/(
    React.createElement("div", null,

    products.map(
    (p, i) => /*#__PURE__*/React.createElement("h1", { key: i }, p.Name, ", Qty : ", qty[i], ", Price: ", p.Price, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("button", { style: { marginLeft: "10px", fontSize: "15px" }, onClick: () => addQty(i) }, "Add"), /*#__PURE__*/
    React.createElement("button", { style: { marginLeft: "10px", fontSize: "15px" }, onClick: () => delQty(i) }, "Delete"))), /*#__PURE__*/



    React.createElement("h1", null, "Total Qty : ", totalQty()), /*#__PURE__*/
    React.createElement("h1", null, "Total Amount: ", totalAmt())));


}

ReactDOM.render( /*#__PURE__*/
React.createElement(Cart, null),
document.getElementById('root'));