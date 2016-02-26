'use strict';

// MODULES //

var tape = require( 'tape' );
var PRECISION = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof PRECISION, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 11 (10 significand bits + 1 implicit bit)', function test( t ) {
	t.equal( PRECISION, 11, 'equals 11' );
	t.end();
});
