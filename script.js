$(document).ready(function() {
	$('#title').focusin(function() { 
        $('div').not('#title').animate({ opacity: 0.25 }, 150);
        $(this).animate({ opacity: 1 }, 150)
	});
	$('#title').focusout(function() { 
        $('div').not('#title').animate({ opacity: 1 }, 150);
        $(this).animate({ opacity: 0.25 }, 150)
	});
});


$(document).delegate('#body', 'keydown', function(e) {
	if(e.which == 9) {
		e.preventDefault();
		var start = $(this).get(0).selectionStart;
		var end = $(this).get(0).selectionEnd;

		// set textarea value to: text before caret + tab + text after caret
		$(this).val($(this).val().substring(0, start)
				    + "\t"
				    + $(this).val().substring(end));

		// put caret at right position again
		$(this).get(0).selectionStart =
		$(this).get(0).selectionEnd = start + 1;	
	}	
});

function load() {
    document.getElementById("title").innerHTML = localStorage['title'];
    document.getElementById("body").innerHTML = localStorage['body'];
}

window.onLoad = load;

function save() {
    localStorage['title'] = document.getElementById("title").innerHTML;
    localStorage['body'] = document.getElementById("body").innerHTML;
}

window.onbeforeunload = save;