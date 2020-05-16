# Shodan Deno

![ci](https://github.com/aldinp16/shodan_deno/workflows/ci/badge.svg)

Simple [Shodan](https://developer.shodan.io/api) API Wrapper For Deno.
## Usage
```typescript
// master branch
import Shodan from 'http://aldi.dev/shodan_deno/mod.ts'

// use denopkg.com to use specific version
import Shodan from 'https://denopkg.com/aldinp16/shodan_deno@v0.2.0/mod.ts'

// use deno.land/x/ to use specific branch
import Shodan from 'https://deno.land/x/shodan_deno@master/mod.ts'

const shodan = new Shodan('apikey')
const response = await shodan.search('laravel port:80')

// or with options
const response = await shodan.host('1.1.1.1', { history: true, minify: true })
```
## API
### `async profile()`
Returns information about the Shodan account linked to this API key.
### `async myIP()`
Get your current IP address as seen from the Internet.
### `async apiInfo()`
Returns information about the API plan belonging to the given API key.
### `async host(ip : string, opt?:IShodanHostOpt)`
Returns all services that have been found on the given host IP.
- `ip` [string] Host IP address
- `opt?` [IShodanHostOpt]
  - `history?` [boolean] (optional) True if all historical banners should be returned (default: False)   
  - `minify?` [boolean] (optional) True to only return the list of ports and the general host information, no banners. (default: False) 
### `async search(query: string, opt?: IShodanSearchOpt)`
Search using the same query syntax as the website and use facets to get summary information for different properties.
- `query` [string] Shodan search query. The provided string is used to search the database of banners in Shodan, with the additional option to provide filters inside the search query using a `"filter:value"` format. For example, the following search query would find Apache webservers located in Germany: `"apache country:DE"`
- `opt?` [IShodanSearchOpt]
  - `facets?` [string] A comma-separated list of properties to get summary information on. Property names can also be in the format of "property:count", where "count" is the number of facets that will be returned for a property (i.e. `"country:100"` to get the top 100 countries for a search query).
  - `page?` [number] The page number to page through results 100 at a time (default: 1) 
  - `minify?` [boolean] True or False; whether or not to truncate some of the larger fields (default: True) 
## To Do
* [ ] Add more action
* [ ] Add more documentation
* [ ] Add more supported types
* [ ] Error handler (Invalid API Key & Rate Limit)
* [x] CI
## License
[MIT](https://git.io/JfRST) © [Aldi Nugraha](https://github.com/aldinp16)
