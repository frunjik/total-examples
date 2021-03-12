exports.install = function() {

  // route to examples/index.html
  ROUTE('GET /examples');
  
	// route /example_101 to views/examples/example_101.html, using views/layout.html as layout
  ROUTE('GET /examples/example-101', 'example-101');

	// route /example_102 to method example_102
 	ROUTE('GET /examples/example-102', example_102);

	// route /example_104 to method example_103
 	ROUTE('GET /examples/example-103', example_103);

	// route /example_N to method example_n
	ROUTE('GET /examples/example/{id}', example_n);
};

function example_102() {
	const controller = this;

	controller
		.view(
			'/examples/example-102', 					// views/examples/example-102.html
			{data: 'hello from server'}				// accessable in view as @{model.data}
		);
}

function example_103() {
	const controller = this;

	// show views/example_103.html, using views/layout-example.html as layout
	controller
		.layout('/layout-example')						// use layout views/layout-example
		.view(
			'/examples/example-103' 					// views/examples/example-103.html
		);
}

function example_n(id) {
	const controller = this;

	controller
		.layout('/layout-example')						// use layout views/layout-example
		.view(`/examples/example-${id}`);
}
