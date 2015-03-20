/// <reference path="../../../declarations/jquery/jquery.d.ts" />

'use strict';

import UserNotification = require("../../util/UserNotification");
import URLUtils = require("../../util/URLUtils");

var WidgetsStore = {
    loadWidget(dashboardId: string, widgetId: string): JQueryPromise<string[]> {
        var url = URLUtils.appPrefixed('/a/dashboards/' + dashboardId + '/widgets/' + widgetId);
        var promise = $.getJSON(url);
        promise.fail((jqXHR, textStatus, errorThrown) => {
            if (jqXHR.status !== 404) {
                UserNotification.error("Loading widget information failed with status: " + errorThrown,
                    "Could not load widget information");
            }
        });
        return promise;
    },

    loadValue(dashboardId: string, widgetId: string): JQueryPromise<string[]> {
        var url = URLUtils.appPrefixed('/a/dashboards/' + dashboardId + '/widgets/' + widgetId + '/value');
        var promise = $.getJSON(url);
        return promise;
    }
};

export = WidgetsStore;