import * as middleware from './middleware';
import * as utils from './utils';

export const gaEventsMiddleware = middleware.googleAnayticsEventsMiddleware;
export const withGaEvent = middleware.withGoogleAnalyticsEvent;
export const gaEvent = utils.triggerGoogleAnalyticsEvent;
export const gaPageView = utils.triggerGoogleAnalyticsPageView;
export const initGa = utils.initGoogleAnalytics;