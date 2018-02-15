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

export const initGoogleAnalytics = (googleAnalyticsId, propertyId, gaOptions = 'auto', onlyInProduction = false) => {
    initGoogleAnalyticsProperty('ga', onlyInProduction);
    window.ga('create', `UA-${googleAnalyticsId}-${propertyId}`, gaOptions);
}

export const initGoogleAnalyticsProperty = (propertyName, onlyInProduction = false) => {
    if (onlyInProduction && process.env.APP_ENV !== 'production') {
      window.ga = (...args) => {
        console.log("[Google Analytics] Don't send events in dev environment. - Event: " + JSON.stringify(args));
        return;
      };
      return;
    }

    /*eslint-disable */
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', propertyName);
    /*eslint-enable */
}
