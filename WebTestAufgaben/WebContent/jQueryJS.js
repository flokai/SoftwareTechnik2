$(document).ready(function() {
	$(".btn1").click(function() {
		$("p").slideUp();
	});
	$(".btn2").click(function() {
		$("p").slideDown();
	});
});

$(document).ready(function() {
	$(".animationButton").click(function() {
		$("div").animate({
			left : '650px'
		});
	});
});

var yahooText = '{"name" : "USD/KRW","price" : "1135.300049","symbol" : "KRW=X","ts" : "1477032594","type" : "currency","utctime" : "2016-10-21T06:49:54+0000","volume" : "0"}';
var obj = JSON.parse(yahooText);
document.getElementById("yahooData").innerHTML = obj.name + "<br>" + obj.price
		+ "<br>" + obj.symbol;


var object = {
	"list" : {
		"meta" : {
			"type" : "resource-list",
			"start" : 0,
			"count" : 163
		},
		"resources" : [ {
			"resource" : {
				"classname" : "Quote",
				"fields" : {
					"name" : "USD/KRW",
					"price" : "1111.300049",
					"symbol" : "KRW=X",
					"ts" : "1350021593",
					"type" : "currency",
					"utctime" : "2012-10-12T05:59:53+0000",
					"volume" : "663253708"
				}
			}
		}, {
			"resource" : {
				"classname" : "Quote",
				"fields" : {
					"name" : "SILVER 1 OZ 999 NY",
					"price" : "0.029372",
					"symbol" : "XAG=X",
					"ts" : "1349991010",
					"type" : "currency",
					"utctime" : "2012-10-11T21:30:10+0000",
					"volume" : "663253708"
				}
			}
		} ]
	}
};

var resources = object.list.resources;
var result = "";
for (r in resources) {
	result += resources[r].resource.fields.name + " - ";
	
document.getElementById("yahooData2").innerHTML = result;


}