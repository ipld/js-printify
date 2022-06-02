# @ipld/printify

Convert a decoded IPLD value to a colored printable string

```javascript
import printify from '@ipld/printify'
import { CID } from 'multiformats/cid'

console.log(printify({
  one: 1,
  two: 'two',
  three: {
    link: CID.parse('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'),
    binary: new TextEncoder().encode('hello world')
  }
}))
```

![IMG_0055](https://user-images.githubusercontent.com/579/58920572-b09a9980-86e7-11e9-88da-70572b7c8dcd.png)
