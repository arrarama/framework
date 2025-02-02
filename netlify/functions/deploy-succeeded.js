const algoliasearch = require('algoliasearch');

const { ALGOLIA_KEY } = process.env;

const contentJSON = [
  {
    "name": "Foo"
  }
];

exports.handler = (event, context, callback) => {
  // Here we'll use Algolia to get upload
  var client = algoliasearch('64LMXTN0XN', ALGOLIA_KEY);
	var index = client.initIndex('prod_site-content');
	var index_capabilities = client.initIndex('prod_capabilities');
	var index_tools = client.initIndex('prod_tooling_services');
	var index_resources = client.initIndex('prod_resources');
	var index_stories = client.initIndex('prod_stories');
	var index_events = client.initIndex('prod_events');
	var contentJSON = require('../../_site/json/site-content.json');
	var contentJSON_capabilities = require('../../_site/json/capabilities.json');
	var contentJSON_tooling = require('../../_site/json/tools-services.json');
	var contentJSON_resources = require('../../_site/json/resources.json');
	var contentJSON_stories = require('../../_site/json/stories.json');
	var contentJSON_events = require('../../_site/json/events.json');

// Test content
	// var contentJSON = [
	//   {
	//   	"objectID": "1",
	//     "name": "Foo"
	//   }
	// ];

	// Site content
	index.clearObjects().then(() => {
  // clear done
	  index.saveObjects(contentJSON, function(err, content) {
		  if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
	// Capabilities
	index_capabilities.clearObjects().then(() => {
  // clear done
	  index_capabilities.saveObjects(contentJSON_capabilities, function(err, content) {
		  if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
	// Tooling
	index_tools.clearObjects().then(() => {
  // clear done
	  index_tools.saveObjects(contentJSON_tooling, function(err, content) {
		  if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
	// Resources
	index_resources.clearObjects().then(() => {
  // clear done
	  index_resources.saveObjects(contentJSON_resources, function(err, content) {
		  if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
	// Stories
	index_stories.clearObjects().then(() => {
  // clear done
	  index_stories.saveObjects(contentJSON_stories, function(err, content) {
	  	if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
	// Events
	index_events.clearObjects().then(() => {
  // clear done
	  index_events.saveObjects(contentJSON_events, function(err, content) {
		  if (err) {
		    console.error(err);
		    callback(err);
		  } else {
		  	callback(null, {
			    statusCode: 200,
			    body: 'Sucess for a better search!',
			  });
		  }
		});
	});
};