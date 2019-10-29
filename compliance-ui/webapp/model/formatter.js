sap.ui.define([], function () {
	"use strict";

	var Formatter = {
		
		blocktimeDisplay : function (blockTime) {
/*			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "MMM d, yyyy, hh:mm a"
			});
			return oDateFormat.format(new Date(blockTime + ' UTC')); */
			var d = new Date(0);
			return new Date(d.setUTCSeconds(blockTime));
		},
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