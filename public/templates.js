(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['1'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "TEST 11111111111111111111111111";
  });
templates['charts'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<label>\r\n				Estimated Due Date -\r\n			</label> \r\n			<div>\r\n				";
  if (stack1 = helpers.dueDate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dueDate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n			</div>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \r\n			<label>\r\n				First day of last menstrual period \r\n			</label>\r\n			<div>\r\n				";
  if (stack1 = helpers.fdlmp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fdlmp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n				\r\n			</div>\r\n		";
  return buffer;
  }

  buffer += "<div id=\"due-date-header\">	\r\n		";
  stack1 = helpers['if'].call(depth0, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div id=\"filters\">\r\n	<div class=\"select day\">\r\n		<label for=\"day\">Choose Date</label>\r\n		<input type=\"text\" name=\"day\" class=\"datepicker\">\r\n	</div>\r\n	<div class=\"select week\">\r\n		<label for=\"week\">Choose Week</label>\r\n		<input type=\"text\" name=\"week\" class=\"datepicker\">\r\n	</div>\r\n	<div class=\"select month\">\r\n		<label for=\"year\">Choose Week</label>\r\n		<input type=\"text\" name=\"year\" class=\"datepicker\">\r\n	</div>\r\n</div>\r\n\r\n\r\n<div id=\"canvas-field\"></div>";
  return buffer;
  });
templates['dashboard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"tab\" href=\"#add\">\r\n	<fieldset> \r\n		<legend>Add Time</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Add Time of MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"#list\">\r\n	<fieldset>\r\n		<legend>List of Movements</legend>\r\n		<div class=\"tab-text\">\r\n			<p>List of Movements</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"#duedate\">\r\n	<fieldset>\r\n		<legend>Due Date</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Due Date</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n\r\n<a class=\"tab\" href=\"#charts\">\r\n	<fieldset> \r\n		<legend>Charts</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Statistics</p>\r\n		</div>\r\n	</fieldset>\r\n</a>";
  });
templates['dueDate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form>\r\n	<div>\r\n		<label>Estimated Due Date</label>\r\n		<input type=\"text\" name=\"dueDate\" value=\"";
  if (stack1 = helpers.dueDate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dueDate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	</div>\r\n	<p> Or </p>\r\n	<div>\r\n		<label>First day of last menstrual period</label>\r\n		<input type=\"text\" name=\"fdlmp\" value=\"";
  if (stack1 = helpers.fdlmp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fdlmp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	</div>\r\n	\r\n	<input type=\"submit\" class=\"submitButton\" value=\"Add\"/>\r\n	<button class=\"edit\">Edit Due Date</button>\r\n</form>";
  return buffer;
  });
templates['item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n<form>\r\n	<div>\r\n		<label>Date</label>\r\n		<input type=\"text\" name=\"date\" value=\"";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	</div>\r\n	<div>\r\n		<label>Hour</label>\r\n		<input type=\"text\" name=\"hour\" value=\"";
  if (stack1 = helpers.hour) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hour; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	</div>\r\n	<div>\r\n		<label>Minute</label>\r\n		<input type=\"text\" name=\"minute\" value=\"";
  if (stack1 = helpers.minute) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.minute; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	</div>\r\n	\r\n	<input type=\"submit\" class=\"submitButton\" value=\"Add\"/>\r\n</form>";
  return buffer;
  });
templates['list-item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "Date ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\nhour ";
  if (stack1 = helpers.hour) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hour; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\nminute ";
  if (stack1 = helpers.minute) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.minute; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\nfdlmp ";
  if (stack1 = helpers.fdlmp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fdlmp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n<button class=\"edit-item\">Edit</button>\r\n<button class=\"delete-button\">Delete</button>\r\n";
  return buffer;
  });
templates['list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul id=\"list-holder\"></ul>";
  });
})();