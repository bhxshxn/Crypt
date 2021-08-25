# what is it?

THIS IS PACKAGE TO HASH AND UNHASH YOUR PASSWORDS OR ANY SECRET, IMPORTANT INFORMATION.

# Installation 

`npm install @bhxshxn/cryptjs`

# Examples
```
to generate hash
const crypt = require('crypt')
const hash = crypt.hash('plainText','secretkey')

to dehash
const crypt = require('crypt')
const dehash = crypt.deHash('hash','secretkey')
```
