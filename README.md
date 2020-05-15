# Shodan Deno
Simple [Shodan](https://developer.shodan.io/api) Wrapper API For Deno.
## Usage
```typescript
import  Shodan  from  'http://aldi.dev/shodan_deno/mod.ts'

const  shodan = new  Shodan('apikey')
const  response = shodan.host('1.1.1.1', { history: true, minify: true })
const response = shodan.search('laravel port:80')
```
## To do
* [ ] Add more action
* [ ] CI
## License
[MIT](https://git.io/JfRST) © [Aldi Nugraha](https://github.com/KSXGitHub)
