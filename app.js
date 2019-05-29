//toggle nav bar when in mobile window
function classToggle(){
	const navs = document.querySelectorAll('.navBarItems')

	navs.forEach(nav => nav.classList.toggle('navBarToggleShow'));
}

document.querySelector('.navBarLinkToggle').addEventListener('click', classToggle);

//add new todo to list

$('#listBtn').click(function(){
	let text = $('#textInput').val();
	let newToDo = '<li>' + text + ' ' + '<span class="delTodo"><i class="fas fa-trash-alt"></i></span></li>';
	if(text.length){
		$(".todoList").append(newToDo);
		$('#textInput').val('');
	}
	deleteTodo();
});

$('ul .delTodo').on('hover',function(){
	$(this).slideToggle('display');
})

//delete todo
var deleteTodo = function(){ 
$('.delTodo').click(function(e){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		e.stopPropagation();
	});
}


deleteTodo();

