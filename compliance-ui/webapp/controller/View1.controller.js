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
			this.getView().setModel(itemModel);
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