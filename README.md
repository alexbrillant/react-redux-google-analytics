## react-redux-google-analytics

```
npm install react-redux-google-analytics --save
```

### 1) Initialize google analytics at the root of your application

<pre>
<b>initGoogleAnalytics(googleAnalyticsId, propertyId, [onlyInProduction = false])</b>
</pre>

This function initializes google analytics and creates a windowga property. 

### 2) Setup the middleware googleAnayticsEventsMiddleware

<pre>
<b>googleAnayticsEventsMiddleware</b>
</pre>

Redux middleware for google analytics. 

If an **action has a googleAnalyticsEvent** property, then a google analytics event is triggered with the window.ga property.

Usage example: 

```javascript
import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'
import { googleAnalyticsEventsMiddleware } from 'react-redux-google-analytics'

let store = createStore(
  todos,
  applyMiddleware(googleAnayticsEventsMiddleware)
)
```

### 3) Attach an event to an action

<pre>
<b>withGoogleAnalyticsEvent(category, action, [label = ''], 
[value = 0], [fieldsObject = {}]) => (wrappedPayload)</b>
</pre>

Usage example : 

```javascript
import { withGoogleAnalyticsEvent } from 'react-redux-google-analytics'

export function addItem(itemId) {
    const payload = {
      type: TYPES.AN_ACTION_TYPE,
    }

    return withGoogleAnalyticsEvent('menu', 'add-item', itemId)(payload)
}
```

Equivalent to : 

```javascript
import { withGoogleAnalyticsEvent } from 'react-redux-google-analytics'

export function addItem(itemId) {
    return {
      type: TYPES.AN_ACTION_TYPE,
      googleAnalyticsEvent: {
        category: 'menu',
        action: 'add-item',
        label: itemId
      }
    }
}
```

### 4) You can also trigger events outside of redux actions if you like 


<pre>
<b>triggerGoogleAnalyticsEvent = (category, action, label = '', 
value = 0, fieldsObject = {})</b>
</pre>
