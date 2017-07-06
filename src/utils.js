export const triggerGoogleAnalyticsEvent = (category, action, label = '', value = 0, fieldsObject = {}) => {
    if (window.ga) {
        window.ga('send', 'event', category, action, label, value, fieldsObject);
    }
}

export const triggerGoogleAnalyticsPageView = (page, fieldsObject) => {
    if (window.ga) {
        window.ga('send', 'pageview', page, fieldsObject);
    }
}

export const initGoogleAnalytics = (googleAnalyticsId, propertyId, onlyInProduction = false) => {
    initGoogleAnalyticsProperty('ga', propertyId, onlyInProduction);
    window.ga('create', `UA-${googleAnalyticsId}-${propertyId}`, { cookieDomain: 'none' });
}

export const initGoogleAnalyticsProperty = (propertyName, propertyId, onlyInProduction = false) => {
    if (onlyInProduction && process.env.APP_ENV === 'production') {
        return;
    }

    /*eslint-disable */
    ((i, s, o, g, r, a, m) => {
        i['GoogleAnalyticsObject'] = r;
        (i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments); }), (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        propertyName
        );
    /*eslint-enable */
}