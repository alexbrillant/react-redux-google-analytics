## react-redux-google-analytics

### Installation

```
npm install react-redux-google-analytics --save
```

Contributions are welcome !

### 1) Initialize google analytics at the root of your application

<pre>
<b>initGa(googleAnalyticsId, propertyId, [gaOptions = 'auto'], [onlyInProduction = false])</b>
</pre>

This function initializes google analytics and creates a windowga property. 

### 2) Setup the middleware gaEventsMiddleware

<pre>
<b>gaEventsMiddleware</b>
</pre>

Redux middleware for google analytics. 

If an **action has a gaEvent** property, then a google analytics event is triggered with the window.ga property.

Usage example: 

```javascript
import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'
import { gaEventsMiddleware } from 'react-redux-google-analytics'

let store = createStore(
  todos,
  applyMiddleware(gaEventsMiddleware)
)
```

### 3) Attach an event to an action

<pre>
<b>withGaEvent(category, action, [label = ''], 
[value = 0], [fieldsObject = {}]) => (wrappedPayload)</b>
</pre>

Usage example : 

```javascript
import { withGaEvent } from 'react-redux-google-analytics'

export const addItem = (itemId) => withGaEvent('menu', 'add-item', itemId)(
  {
    type: TYPES.AN_ACTION_TYPE,
  }
)
```

Equivalent to : 

```javascript
export const addItem = (itemId) => ({
  type: TYPES.AN_ACTION_TYPE,
  gaEvent: {
    category: 'menu',
    action: 'add-item',
    label: itemId
  }
})
```

### 4) Trigger page view hit 

<pre>
<b>gaPageView([page], [fieldsObject])</b>
</pre>

Usage with react router
```javascript
import { gaPageView } from 'react-redux-google-analytics';
import { createBrowserHistory } from 'history';
  [...]

const history = createBrowserHistory();
history.listen((location) => gaPageView(location.pathname + location.search));

ReactDOM.render((
    <Router history={history}>
        [...]
```

### 5) Trigger events outside of redux actions if you like 

<pre>
<b>gaEvent(category, action, label = '', 
value = 0, fieldsObject = {})</b>
</pre>