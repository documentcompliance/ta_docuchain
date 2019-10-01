sap.ui.define([], function () {
	"use strict";

	var Formatter = {

		transactionStatusDisplayColorScheme : function (streamId) {
			var colorScheme;
			if(streamId !== "stream2") { 
				colorScheme = 8;
			} else {
				colorScheme = 3;
			}
			return colorScheme;
		}, 
		transactionStatus : function (streamId) {
			var sStatus;
			if(streamId !== "stream2") { 
				sStatus = "Verified";
			} else {
				sStatus = "Rejected";
			}
			return sStatus;
		}	
	};
	return Formatter;

}, /* bExport= */ true);