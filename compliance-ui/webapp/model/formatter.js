sap.ui.define([], function () {
	"use strict";

	var Formatter = {

		transactionStatusDisplayColorScheme : function (streamId) {
			var colorScheme;
			if(streamId === "ganesh.namasivaya@sap.com") { 
				colorScheme = 8;
			} else {
				colorScheme = 3;
			}
			return colorScheme;
		}, 
		transactionStatus : function (streamId) {
			var sStatus;
			if(streamId === "ganesh.namasivaya@sap.com") { 
				sStatus = "Verified";
			} else {
				sStatus = "Rejected";
			}
			return sStatus;
		}	
	};
	return Formatter;

}, /* bExport= */ true);