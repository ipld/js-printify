# js-printify

Convert a decoded IPLD value to a colored printable string

```javascript
const printify = require('@ipld/printify')
const CID = require('cids')

console.log(printify({
  one: 1,
  two: 'two',
  three: {
    link: new CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'),
    binary: Buffer.from('hello world')
  }
})
```
   
