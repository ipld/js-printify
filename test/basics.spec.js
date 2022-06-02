/* eslint-env mocha */

import { CID } from 'multiformats/cid'
import { assert } from 'chai'
import printify from '../index.js'

it('all', () => {
  const str = printify({
    one: 1,
    two: 'two',
    three: {
      sub: 1,
      cid: CID.parse('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'),
      binary: new TextEncoder().encode('asdf'),
      array: [
        'one',
        'two',
        3
      ]
    }
  })
  assert.equal(str, '{\n  \u001b[32mone\u001b[39m: \u001b[31m1\u001b[39m\n  \u001b[32mtwo\u001b[39m: \u001b[31m"two"\u001b[39m\n  \u001b[32mthree\u001b[39m: {\n    \u001b[32msub\u001b[39m: \u001b[31m1\u001b[39m\n    \u001b[32mcid\u001b[39m: CID(\u001b[31mQmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u\u001b[39m)\n    \u001b[32mbinary\u001b[39m: Bytes({\u001b[32msize\u001b[39m: \u001b[31m4\u001b[39m})\n    \u001b[32marray\u001b[39m: [ \u001b[31m"one"\u001b[39m, \u001b[31m"two"\u001b[39m, \u001b[31m3\u001b[39m ]\n  }\n}')
})
