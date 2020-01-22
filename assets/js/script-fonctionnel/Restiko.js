var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com/',
    apiKey: 'keyRgXeCKtmAs6Efz'
});
var base = Airtable.base('appW2GgrOTBqB7GN7');