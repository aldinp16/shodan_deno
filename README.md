# Shodan Deno
Simple [Shodan](https://developer.shodan.io/api) API Wrapper For Deno.
## Usage
```typescript
import Shodan from 'http://aldi.dev/shodan_deno/mod.ts'

const shodan = new Shodan('apikey')
const response = await shodan.search('laravel port:80')
// or with options
const response = await shodan.host('1.1.1.1', { history: true, minify: true })
```
## To do
* [ ] Add more action
* [ ] CI
## License
[MIT](https://git.io/JfRST) © [Aldi Nugraha](https://github.com/KSXGitHub)
