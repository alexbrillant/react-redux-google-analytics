import * as middleware from './middleware';
import * as utils from './utils';

export const googleAnayticsEventsMiddleware = middleware.googleAnayticsEventsMiddleware;
export const withGoogleAnalyticsEvent = middleware.withGoogleAnalyticsEvent;
export const triggerGoogleAnalyticsEvent = utils.triggerGoogleAnalyticsEvent;
export const initGoogleAnalytics = utils.initGoogleAnalytics;
