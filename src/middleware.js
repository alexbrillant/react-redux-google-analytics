import { triggerGoogleAnalyticsEvent } from './utils'

export const googleAnayticsEventsMiddleware = store => next => action => {
    const ga = action.googleAnalyticsEvent;
    if (ga) {
        const { category, action: analyticsAction, label, value, fieldsObject } = ga;
        triggerGoogleAnalyticsEvent(category, analyticsAction, label, value, fieldsObject);
    }

    return next(action);
}

export const withGoogleAnalyticsEvent =
    (category, action, label = '', value = 0, fieldsObject = {}) => (wrappedPayload) => ({
        ...wrappedPayload,
        googleAnalyticsEvent: {
            category,
            action,
            label,
            value,
            fieldsObject
        }
    })