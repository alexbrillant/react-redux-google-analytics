import { withGoogleAnalyticsEvent, googleAnayticsEventsMiddleware } from '../index';
import * as util from '../utils';

describe('GoogleAnalyticsEventMiddleware', () => {
    const next = () => { };
    const store = {};
    const payload = { payload: 'an action without google analytics' };
    const payloadWithGoogleAnalytics = { ...payload, googleAnalyticsEvent: {} };

    it('given no google analytics when google analytics event middleware then should not trigger any event', () => {
        util.triggerGoogleAnalyticsEvent = jest.fn();

        googleAnayticsEventsMiddleware(store)(next)(payload);

        expect(util.triggerGoogleAnalyticsEvent).toHaveBeenCalledTimes(0);
    });

    it('given google analytics when google analytics event middleware then should trigger event', () => {
        util.triggerGoogleAnalyticsEvent = jest.fn();

        googleAnayticsEventsMiddleware(store)(next)(payloadWithGoogleAnalytics);

        expect(util.triggerGoogleAnalyticsEvent).toHaveBeenCalledTimes(1);
    });
});

describe('with google analytics event', () => {
    it('with google analytics event', () => {
        const givenPayload = { payload: 'an amazing payload' };

        const actual = withGoogleAnalyticsEvent('menu', 'an-action')(givenPayload);

        expect(actual).toEqual({
            ...givenPayload,
            googleAnalyticsEvent: {
                category: 'menu',
                action: 'an-action',
                label: '',
                value: 0,
                fieldsObject: {}
            }
        });
    });
});