# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = required('sensitive-words')
//ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const {sensitiveWords} = require('sensitive-words');

const filtered = sensitiveWords(
  'The new apple mac book pro has touch bar',
  ['pro', 'bar']
)

console.log(filtered);
//The new apple mac book **** has touch ****
```
