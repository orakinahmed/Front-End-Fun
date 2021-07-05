
// How to do variables, for loops, functions, and arrays in Javascript
console.log('My first javascript print!');

// Python: names = ['bob', 'faraz','james']
var names = ['bob','faraz', 'james'];

// Python: def showNames(items):
function showNames(items) {
    // Python: for i in range(0,len(items)):
    //           print(items[i])
    for (var i=0; i < items.length; i++) {
        console.log(items[i]);
    }
}

showNames(names);

var groceries = ['apple','bannana', 'orange'];

showNames(groceries);

var fruitInfo = {'color':'red', 'name':'apple','age':4}
console.log('Your chosen fruit is ' + fruitInfo['name']);

/** 
 * Select an element. What do you want to work with?
 * What do you want to do with it?
 * */ 

/** 
 * How to Select Elements using jQuery: Selector $()
 * 
 * Common Functions in jQuery
 * html() - Pass a string that contains html
 * val() - Pass a string that becoems a value inside an input box
 * css() - You pass in css dictionary
 * 
 * 
 * Actions -> Event Handlers Ex. onClick, onMouseMove, onScroll, onChange
 * */ 

$('h1').css({'color': 'blue'});
$('h1').html('<p>This is your current area</p>');
$('.name').val('Rakin');

// Event Driven Language | Callback function
$('.age').on('change', function() {
    var age = $('.age').val();
    console.log(age);

    // Python: if conditon:
    if (isNaN(age) === true) {
        alert('You did not type in a number bastard!');
        $('.ageErrorBox').html('<p>YOU BASTARD!</p>');
    } else {
        $('.ageErrorBox').html('');
    }
});

$('.name').on('change', function() {
    var name = $('.name').val();
    console.log(name);

});

$('.punchMe').on('click', function() {
    var name = $('.name').val();
    var age = $('.age').val();
    var job = $('.job').val();

    var formData = {'name': name, 'age': age, 'job': job};

    $.ajax({
        url: '/save/contact',
        method: 'POST',
        data: formData,
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        }
    });

    alert('Your name is '+ name + 'Your age is ' + age + 'Your job is '+ job);
});



