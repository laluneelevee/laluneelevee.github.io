$(function(){
	arr = [];
	var i = 0;

	$.ajax({
		url: "1-1.json",
		dataType: "json",
	})
	.done(function(data){
		// arrに読み込んだテキストを一行ずつ追加する.
		$.each(data, function(key, value){
			//arr.push("<div class=\"" + value.balloon + "\" ><p>" + value.text + "</p></div>");
			cl_s1 = "<div class=\"" + "balloon-" + value.loc + "\" >";
			if(value.name != ""){
				cl_s2 =   "<div class=\"" + "faceicon" + "\" >";
				img1  =   "<img src=\"" + value.name + ".png" + "\" >";
				txt2  =   "<div class=\"" + "charname" + "\" >" + value.name + "</div>";
				img1 +=  txt2;
				cl_e2 =   "</div>"
			}
			else{
				cl_s2 = ""; img1 = ""; cl_e2 = "";
			}
			cl_s3 =   "<div class=\"" + "chatting" + "\" >";
			cl_s4 =     "<div class=\"" + "says-" +value.loc + "\" >";
			txt1  =        "<p>" + value.text + "</p>";
			cl_e4 =     "</div>";
			cl_e3 =   "</div>";
			cl_e1 = "</div>";
			str = cl_s1 + cl_s2 + img1 + cl_e2 + cl_s3 + cl_s4 + txt1 + cl_e4 + cl_e2 + cl_e1
			arr.push(str);
			console.log(str)
		});
	});

	// クリックする毎にarrのテキストを出力する. 
	$("#tap").on('click', function(){
		// story-list の高さ取得
		var off = $('#section01 .story-list');
		//console.log(off.height());

		// テキスト追加
		$("#section01 .story-list").append(arr[i]);
		i++;

		// スクロール
		$(window).scrollTop(off.height());
	});
});

