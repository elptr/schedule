goog.provide("Router");

//Router
Router = Backbone.Router.extend({
	routes:{
		"":"dashboard",
		"list":"list",
		"add" : "add",
		"edit/:id": "edit",
		"duedate":"duedate",
		"duedate/:id": "editDueDate",
		"charts/:date":"chartsDay"
		//,  "list/:allBeforeThisDate": "filter"   , call   .filter(allBeforeThisDate), almost the same as   .list()
	},
	
	initialize:function(options){
		this.kicksCollection = null;
		this.dashboardView = null;
		this.listView = null;
		this.itemView = null;
		this.editView = null;
		this.dueDate = null;
		this.dueDateModel = null;
		this.m = null;
	},
	
	duedate:function(){
		/*var dueDateModel = new DueDateModel();
		
		if(!this.dueDate){
			this.dueDate = new DueDateView({model:dueDateModel});
		}
		this.dueDate.render();
		*/
		
		var that = this;
		this.dueDateModel = new DueDateModel();
		this.dueDate = new DueDateView({model:this.dueDateModel});
		
		this.dueDateModel.fetch({
			reset:true,
			success: function(){
				that.dueDate.render();
			},
			error:function(){
				console.log(new Error().stack);
			}
			
		});
		
	},
	
	editDueDate: function(id){
        var that = this;
        that.m = new DueDateModel();
        
        that.m.set({"_id": _id});
        that.m.fetch({
        	reset:true,
			success: function(){
				that.dueDate = new DueDateView({model:that.m});
				that.dueDate.render();
			},
			error:function(){
				console.log(new Error().stack);
			}
        });
   },

	chartsDay: function(date){
		
	
	},
	dashboard: function(){
		if(!this.dashboardView){
			this.dashboardView = new DashboardView({});
		}
		this.dashboardView.render();
	},
	
	list: function(){
		if(!this.kicksCollection){
			this.kicksCollection = new KicksCollection();
			this.listView = new ListView.ListView({model:this.kicksCollection});
		}
		var that = this;
		this.kicksCollection.fetch({
			// TODO add following when you filter, it'll send parameters to the server -then-> request MongoDb with them:
			// data: { allBeforeThisDate: "11.11.2013", allAfterThisDate: "10.10.2013", .... },

			reset:true,
			success: function(){
				that.listView.render();
			}
		});
	},
	add:function(){
		var modelItem = new KickModel();
		this.itemView = new ItemView({model:modelItem});
		this.itemView.render();
	},
	edit: function(id){
        var that = this;
        that.m = new KickModel();
        that.m.set({"_id": id});
        that.m.fetch({            	
            success: function () {
				console.log(that.m);
				that.editView = new ItemView({model : that.m});
				that.editView.render(); 
            }
        });
    }
	
});

