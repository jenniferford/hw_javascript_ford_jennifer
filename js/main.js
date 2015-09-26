var iceCream = [ "Mint Chocolate Chip", "Liz Lemon", "Strawberry Shortcake" ];
iceCream.push( "Cookie Dough" )

var obama = {
	firstName:"Barack",
	lastName:"Obama",
	termLength:"8 years",
	party:"Democrat",
	yearsOfPresidency:"2009-present",
};
var bush2 = {
	firstName:"George W.",
	lastName:"Bush",
	termLength:"8 years",
	party:"Republican",
	yearsOfPresidency:"2001-2009",
};
var clinton = {
	firstName:"Bill",
	lastName:"Clinton",
	termLength:"8 years",
	party:"Democrat",
	yearsOfPresidency:"1993-2001",
};
var bush1 = {
	firstName:"George H.W.",
	lastName:"Bush",
	termLength:"4 years",
	party:"Republican",
	yearsOfPresidency:"1989-1993",
};
var reagan = {
	firstName:"Ronald",
	lastName:"Reagan",
	termLength:"8 years",
	party:"Republican",
	yearsOfPresidency:"1981-1989",
};
var presidents = [obama, bush2, clinton, bush1, reagan] 
console.log( presidents[2].firstName + " " + presidents[2].lastName );

function howdy( firstName, lastName, greeting ){
	return firstName + lastName + "says" + greeting;
}
var greeting = howdy( "Jennifer ", "Ford ", " howdy!" );

var numba = function( string ) {
	if ( string.length < 7 ){
		console.log( "What a short little word!" );
	}
	else if ( string.length > 7 ){
		console.log( "I'm sorry, but taht's too many to count." );
	}
	else if ( string.length == 7 ){
		console.log( "7, what a perfect choice!" );
	};

	numba("7");
	numba("seventy");
	numba("university");

	function inception( callback, value ) {
		callback(value);
	};
	function printMovieTitle( title ){
		console.log( title + " is a fantastic movie." );
	}
	inception( printMovieTitle, "Snow White" )
}
