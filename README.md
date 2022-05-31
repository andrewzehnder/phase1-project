# phase1-project

Phase 1 Project - Getting Postal/Zip Code Information for Different Cities

## Description

This page is designed to display city information for given postal codes in the United States. To search for a new city, there is a button which will open up a banner with an input text box. Once searched, it will display the information in a card format below. You can add as many cards as you'd like. This will be stored even after page refresh. If you want to remove a card, you can click the remove button as well. Hovering over the header will change the color from black to blue. Hovering over the buttons will also change the style.

## Installation

To get this page running, you will need to the API JSON server running. 

Step 1: Run the following command to setup the JSON server:
npm install -g json-server

Step 2: Start the JSON server using the following command:
json-server --watch db.json

From there, the page should post, update, and delete from the db.json file.

## Usage

From the home page, there may be a few cards already created. To create a new card using the search, click the 'Search a New City' button.

Example Postal Codes include: "77449, 11368, 60629"

After searching for a given postal code, you may leave them on the page, or remove using the button. Duplicate searches will not add a 2nd card.

## Acknowledgement

American flag picture used from Alpha Coders (https://www.alphacoders.com): https://images2.alphacoders.com/441/441503.jpg

## Video Walk-Through

https://youtu.be/xnmOEA25DfM 

## Blog on API JSON Server 

https://medium.com/@azehnder2/adding-items-to-api-json-server-6f515d238c7c 