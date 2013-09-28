goog.provide("main");

goog.require("DateModel");
goog.require("Collection");
goog.require("DashboardView");
goog.require("ItemView");
goog.require("ListView");
goog.require("Router");



$(document).ready(function(){
	//serializeObject - from form to JSON
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    
	

//Add _id to work with mongoose and Run BB
	Backbone.Model.prototype.idAttribute = '_id';
	var app = new Router();
	Backbone.history.start();
});



