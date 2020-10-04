# CO2 Emission Calculator

<p align="justify">The tool returns the amount of CO2-equivalent that will be caused when traveling a given distance using a
given transportation method.</p>

## Installation

### Clone

1. Clone this repo to your local machine

### Navigate

2. Navigate to the folder, where you have downloaded this repo.

For example: `C:\Users\Desktop\kumar_developer_challenge>`

### Setup

3. Now install npm package

`> npm install`

## Running

1. `> node JS_file_name --transportation-method key/name(mandatory) --distance numeric-value(mandatory) --unit-of-distance km or m(optional) --output kg(optional)`

   For example: `> node co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg`

2. `> node JS_file_name --transportation-method=key/name(mandatory) --distance=numeric-value(mandatory) --unit-of-distance=km or m(optional) --output=kg(optional)`

   For example: `> node co2-calculator --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car`

## Functional Testing

1. The default value for unit is kilometer km:

   C:\Users\Desktop\kumar_developer_challenge> node co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km<br/>
   You trip caused 2.6kg of CO2-equivalent.

2. The output shows the amount of CO2-equivalent in kilogram kg or gram g:

   C:\Users\Desktop\kumar_developer_challenge> node co2-calculator --transportation-method train --distance 14500 --unit-of-distance m<br/>
   You trip caused 87g of CO2-equivalent.

3. Named parameters can be put in any order and either use a space ( ) or equal sign ( = ) between key and value:

   C:\Users\Desktop\kumar_developer_challenge> node co2-calculator --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car<br/>
   You trip caused 2.6kg of CO2-equivalent.
