-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;

-- Creates the table "prodcuts" within animals_db --
CREATE TABLE products (
-- Makes a general column called "item_id" which cannot contain null --
   item_id INTEGER AUTO_INCREMENT,
-- Makes a string column called "name" which cannot contain null --
   product_name VARCHAR(50) NOT NULL,
-- Makes a sting column called "department" --
   department_name VARCHAR(50),
-- Makes an numeric column called "item price" --
   item_price INTEGER(30),
-- Makes an numeric column called "stock quanity --
   stock_quanity INTEGER(30)
);
