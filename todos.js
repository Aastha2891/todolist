// check of specific todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
})

$("span").click(function(){
	$(this).parent().fadeOut(500,function(){
	$(this).fadeOut(1000);
});
})