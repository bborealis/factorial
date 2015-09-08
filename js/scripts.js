var factorial = function(input) {
    var number_array = [];
    var total = 1;

    for (var i = input; i >= 1; i --) {
        number_array.push(i);
    }
    console.log(number_array);

    number_array.forEach(function(number){
        total =  total * number;
    });

    console.log(total);
    return total;
}

$(document).ready(function() {
    $("form#factorial").submit(function(event) {

        var input = ($("input#input").val());
        var result = factorial(input);

        $('.input').text(input);
        $('.total').text(result);

        $("#result").show();
        event.preventDefault();
    });
});
