// Cache some selectors
var clock = $('#scales'),	
	unit = clock.find('.unit');

$(function () {

    var num = 10023.05;

    update_weight(num);

});

function update_weight(num) {

    // Map digits to their names (this will be an array)
    var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');

    // This object will hold the digit elements
    var digits = {};

    var numToString = num.toString();

    var weight = new Array(),
        digits_item = new Array();

    var positions = new Array();
    var count = 0;    
    for (var i = 0; i < numToString.length; i++) {
        if (numToString[i] != '.') {
            weight[count] = Number(numToString[i]);
            digits_item[count] = numToString[i];
            count++;
        }
        positions[i] = numToString[i];
    }  
    

    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.find('.digits');
    var digit_position = 0;
    $.each(positions, function () {

        if (this == '.') {
            digit_holder.append('<div class="dots">');
        }
        else {

            var pos = $('<div>');

            for (var i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            // Set the digits as key:value pairs in the digits object
            digits[digit_position] = pos;
            digit_position++;
            // Add the digit elements to the page
            digit_holder.append(pos);
        }

    });

    for (var i = 0; i < weight.length; i++) {
        digits[i].attr('class', digit_to_name[weight[i]]);
    }    

    unit.append("Kg");
};