var mysql = require("mysql");
require('console.table');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Psalm116!",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayProducts();
  connection.end();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);

    inquirer
      .prompt([{
        name: "id_number",
        type: "input",
        message: "What is the ID number of the product you would like to buy?",

      },
        {
          name: "quantity",
          type: "input",
          message: "How many units of the product would you like to buy?",
          validate: function (input) {
            if (isNaN(parseFloat(input))) {
              console.log("\n That is invalid. Please type in a number");
              return false;
            }
            return true;
          }
        }]).then(function (response) {
          var query = "SELECT * FROM Products Where id_number= " + response.Quantity;
          connection.query(query, function(err, res) {
            if(response.Quantity <= res) {
              for (var i = 0; i < res.length; i++) {
                console.log("We do currently have " + res[i].stockQuantity + " " + res[i].prodcutName + ".");
              }
            } else {
              console.log("We do not have enough in stock right now");
            }
          })
        })
  })
};


