# normalize-domain

[![Greenkeeper badge](https://badges.greenkeeper.io/unshift/normalize-domain.svg)](https://greenkeeper.io/)

Given a url, returns the fully qualified domain name.

## Installation 

```bash
npm i normalize-domain --save
```

## Usage

```js
const normalize = require('normalize-domain')

normalize('https://www.google.com') 
// => google.com

normalize('www.google.com') 
// => google.com

normalize('https://firebase.google.com/') 
// => firebase.google.com
```
