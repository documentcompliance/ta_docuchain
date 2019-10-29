sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("com.sap.document.compliance.compliance-ui.controller.View1", {
		formatter: formatter,
		onInit: function () {
			
			var keyModel = new sap.ui.model.json.JSONModel();
			keyModel.loadData("/docuchain/liststreamkeys", null, false);
			this.getView().setModel(keyModel, "master");
			
			this.jsonModel = new sap.ui.model.json.JSONModel();
			this.jsonModel.loadData("/docuchain/liststreamitems", null, false);
			
			this.stream2DataJsonModel = new sap.ui.model.json.JSONModel();
			this.stream2DataJsonModel.loadData("/docuchain/liststreamitemsStream2", null, false);			
			
			var itemModel = new sap.ui.model.json.JSONModel();
			if(this.stream2DataJsonModel.getData().length > 0) {
				itemModel.setData(this.jsonModel.getData().concat(this.stream2DataJsonModel.getData()));
			} else {
				itemModel.setData(this.jsonModel.getData());
			}

			var documentData = itemModel.getData();
			documentData = this.getSortedData(itemModel.getData(), "blocktime", false);
			itemModel.setData(documentData);
			this.byId("idTable").setHeaderText("Tax Compliance Report - Documents (" + itemModel.getData().length + ")");
			
			this.getView().setModel(itemModel);
		},
		
		getSortedData: function (data, prop, isAsc) {
		    return data.sort((a, b) => {
		        return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
		    });
		},			
		
		onSelectInvoiceId: function(oEvent){
			var dataToFilter = this.jsonModel.getData();
			var key = oEvent.getSource().getTitle();
			
			var filteredData = dataToFilter.filter(function(v){
				return v.key === key;
			});
			
			this.getView().getModel().setData(filteredData[0].data.json);
			
			
			
		}
	});
});