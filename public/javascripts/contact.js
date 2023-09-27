/**
 * Student Name: John Celso Inocente
 * Student ID: 301 332 723
 * Date: September 27, 2023
 * Filename: contact.js
 */

function gotoHomePage(req, res) {
        console.log('First Name: ' + document.getElementById('firstName').value);
        console.log('Last Name: ' +document.getElementById('lastName').value);
        console.log('Contact Numer: ' +document.getElementById('contactNumber').value);
        console.log('Email Address: ' +document.getElementById('emailAddress').value);
        console.log('Message: ' +document.getElementById('message').value);

        return res.redirect('/'); 
}