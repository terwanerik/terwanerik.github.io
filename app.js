(function($){
	function compare(a,b) {
	  if (b.stargazers_count < a.stargazers_count)
	    return -1;
	  if (b.stargazers_count > a.stargazers_count)
	    return 1;
	  return 0;
	}
	
	function loadRepos()
	{
		$.getJSON("https://api.github.com/users/terwanerik/repos", function(objs){
			objs.sort(compare);
			
			$("#repoList").html('');
			
			for(var i = 0; i < objs.length; i++){
				var obj = objs[i];
				var url = (obj.homepage ) ? obj.homepage : obj.html_url;
				var $row = $("<div><a href='"+url+"'><h4>" + obj.name + "</h4></a><h6>UPDATED AT "+obj.updated_at+" - "+obj.stargazers_count+" STARS</h6><p>"+obj.description+"</p></div>");
				
				console.log(obj);
				
				$("#repoList").append($row);
			}
		});
	}
	
	loadRepos();
})(jQuery);