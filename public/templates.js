(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['1'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "TEST 11111111111111111111111111";
  });
templates['dashboard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"tab\" href=\"#add\">\r\n	<fieldset> \r\n		<legend>Add Time</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Add Time of MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"#edit\">\r\n	<fieldset>\r\n		<legend>Edit MV</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Edit of Daily MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"#list\">\r\n	<fieldset>\r\n		<legend>Daily MV</legend>\r\n		<div class=\"tab-text\">\r\n			<p>List of Daily MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n\r\n<a class=\"tab\" href=\"#list\">\r\n	<fieldset> \r\n		<legend>Charts</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Statistics</p>\r\n		</div>\r\n	</fieldset>\r\n</a>";
  });
templates['item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\r\n<form>\r\n	<div>\r\n		<label>Date</label>\r\n		<input type=\"text\" name=\"date\"/>\r\n	</div>\r\n	<div>\r\n		<label>Hour</label>\r\n		<input type=\"text\" name=\"hour\"/>\r\n	</div>\r\n	<div>\r\n		<label>Minute</label>\r\n		<input type=\"text\" name=\"minute\"/>\r\n	</div>\r\n	\r\n	<input type=\"submit\" class=\"submitButton\" value=\"Add\"/>\r\n</form>";
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