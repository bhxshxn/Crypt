# what is it?

THIS IS PACKAGE TO HASH AND UNHASH YOUR PASSWORDS OR ANY SECRET, IMPORTANT Strings.

# Installation 

`npm install stringcryptjs`

# Examples
```
to generate hash
const crypt = require('stringcryptjs')
const hash = crypt.hash('plainText','secretkey')

to dehash
const crypt = require('stringcryptjs')
const dehash = crypt.deHash(hash,'secretkey')
```
