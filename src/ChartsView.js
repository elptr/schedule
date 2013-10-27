goog.provide("ChartsView");

// List Item View
ListView.ListItemView = Backbone.View.extend({

    "tagName" : "li",

    events : {
        "click .edit-item" : "editItem",
        "click .delete-button" : "deleteItem"
    },
	deleteItem:function(){
		var that = this;
		that.model.destroy({
			success: function (model, response) {
				console.log("success");
				//that.options.parent.render();
           },
           error:function(model, xhr, options){
           	console.log("error");
           	console.log(model);
           	console.log(new Error("").stack);
           	console.log("error end");
           }
		});
	},
	
    editItem: function() {
        app.navigate("edit/"+this.model.get("_id"), {trigger: true});
    },

    initialize:function(){
        this.template = Handlebars.templates["list-item"];
    },
    render:function(){
        var res = this.template(this.model.toJSON());
        this.$el.html(res);
        return this;
    }
});


//List View
ListView.ListView = Backbone.View.extend({
	el: "#container",
	initialize: function(){
		this.template = Handlebars.templates['list']
	},
	 render:function(){
        res = this.template({});
        this.$el.html(res);

        var models = this.model.models;

        var container = document.createDocumentFragment();

        for (var i = 0; i < models.length; i++) {

            var listIitemView = new ListView.ListItemView({
                model: models[i],
                parent: this
            });

            container.appendChild(listIitemView.render().el);
        }

        this.$el.find("#list-holder").html(container);

        return this;
    }
});
	


