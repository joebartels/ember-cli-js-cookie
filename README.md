# Ember-cli-js-cookie

#### Installation
* `ember install ember-cli-js-cookie`

#### Usage
```js
import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

const { RSVP } = Ember;

export default Ember.Route.extend({
  
  beforeModel() {
    if (!Cookies.get('logged-in')) {
      return RSVP.reject();
    }
  }
});
```

#### js-cookie library
https://github.com/js-cookie/js-cookie

