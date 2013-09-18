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
  


  return "<a class=\"tab\" href=\"/add\">\r\n	<fieldset> \r\n		<legend>Add Time</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Add Time of MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"/edit\">\r\n	<fieldset>\r\n		<legend>Edit MV</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Edit of Daily MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n<a class=\"tab\" href=\"/daily-list\">\r\n	<fieldset>\r\n		<legend>Daily MV</legend>\r\n		<div class=\"tab-text\">\r\n			<p>List of Daily MV</p>\r\n		</div>\r\n	</fieldset>\r\n</a>\r\n\r\n<a class=\"tab\" href=\"/list\">\r\n	<fieldset> \r\n		<legend>Charts</legend>\r\n		<div class=\"tab-text\">\r\n			<p>Statistics</p>\r\n		</div>\r\n	</fieldset>\r\n</a>";
  });
templates['list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n		Date ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</li>\n	<li>\n		hour ";
  if (stack1 = helpers.hour) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hour; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</li>\n	<li>\n		minute ";
  if (stack1 = helpers.minute) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.minute; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</li>\n	<li>\n		fdlmp ";
  if (stack1 = helpers.fdlmp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fdlmp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</li>\n";
  return buffer;
  }

  buffer += "<ul>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
})();