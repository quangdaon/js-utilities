# JS Utilities

Functions I use often.

## Installation
This is not yet available through npm, but you can install it from GitHub via: `npm i -S quangdaon/js-utilities`

## Usage
There is no build system built into the package as of yet. It is intended to be implemented into your build system. At the time of creation, these namespaces do not coincide with any global namespace in the JavaScript specifications, to the best of my knowledge.

### Base Usage
You have various options for importing a module. For example, say you want to import Utils.Random.between:
```javascript
import Random from 'js-utilities/src/random'; // Recommended - Imports entire Random namespace: Random.between();
import { Random } from 'js-utilities'; // Imports entire Random namespace: Random.between();
import { between as randomBetween } from 'js-utilities/src/random'; // Import only Random.between: randomBetween();
import Utils from 'js-utilities' // Imports entire Utils namespace: Utils.Random.between();
```


## Todo:

- Unit tests
- Publish to npm under @quangdao scope