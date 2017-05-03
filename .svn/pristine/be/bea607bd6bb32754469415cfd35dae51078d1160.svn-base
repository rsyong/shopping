// ***********ajax***********
// 用户注册
$(".log input[value='注册']").click(function(){
	$.ajax({
		type:"get",
		url:"http://59.110.136.227:8080/Baobeijie/register/userReg",
		async:true,
		dataType:'JSON',
		data:{
			username:"admin",
			userPhone:$("input[name='phone']").val(),
			userPwd:$(".pwd2").val(),
			userRpPwd:$(".pwd2").val(),
		},
		success:function(data){
			if(data.success=='OK'){
				alert("注册成功");
				$(".mod_login,.mod").hide();
			}
		}
	});
});
// 用户登录
$(".log input[value='登录']").click(function(){
	var u=$("input[name='phonelogin']").val();
	$.ajax({
		type:"get",
		url:"http://59.110.136.227:8080/Baobeijie/interface/login?username=admin&password=123456",
		async:true,
		dataType:'JSON',
		data:{
			username:"admin",
			userPhone:u,
			passworld:$(".pwd1").val(),
		},
		success:function(data){
			if(data.success=="success"){
				$(".mod_login,.mod").hide();
				localStorage.user=u;
				$(".loging ul li").eq(0).html(localStorage.user)
			}
		}
	});
})
// 存储用户用
if(localStorage.user){
	$(".loging ul li").eq(0).html(localStorage.user)
}
// 获取商品信息
$(function(){
	$.ajax({
		type:"get",
		url:"http://59.110.136.227:8080/Baobeijie/ shopInfo/listShopInfo",
		async:true,
		dataType:'JSON',
		success:function(datad){
			if(datad["shopInfoList"].length==0){
				$(".morn").hide();
				return;
			}
			new Vue({
			    el: '.morn',
			    data: {
			      shopInfoList: datad["shopInfoList"]
			    },
			    filters:{
			    	Fsrc:function(value){
			    		return value="http://59.110.136.227:8080/Baobeijie/shopInfo/downLoads?fileName="+value;
			    	}
			    }
			})
			$(".morn img").click(function(e) {
				e.stopPropagation()
				// 打开模态框
				$(".mod").eq(0).show().children(".modtwo").show();
				$(".mod").eq(0).children(".modtwo").children(".mod-left").find("img").first().attr("src", $(this).attr("src"));
				var q = 0;
				$(".small").empty();
				// 获取小图片的路径
				$(this).next(".hide").children("span").each(function() {
					$(".small").append("<img src=" + $(this).html() + " />" + " &nbsp;");
				});
				// 为第一个图片添加边框样式
				$(".small").children("img").first().addClass("active_img");
				// 获取大图片路径
				$(".small img").click(function() {
					$(".mod-left>img").attr("src", $(this).attr("src"));
					// 添加边框样式
					$(this).addClass("active_img").siblings().removeClass("active_img");
				});
				// 获取价格  库存值
				$(".jiage").html($(this).siblings(".img_text").children(".monye").children("span").html());
				$(".kucun").html($(this).attr("data-kucun"));
				$(".numberd").val(1);
				$(".mod_title").html($(this).siblings(".img_text").children("div").first().html());
				var shuzhi=0;
				// 单击订单量减
				$("input[name=jian]").click(function(){
					if($(".numberd").val()>0){
						$(".numberd").val(parseInt($(".numberd").val())-1);
					}
				})
				// 单击订单量加
				$("input[name=jia]").click(function(){
					var cun=$(".kucun").html();
					if(parseInt($(".numberd").val())<cun){
						$(".numberd").val(parseInt($(".numberd").val())+1);
					}else{
						alert("您已超出库存范围");
					}
				})
				// 添加购物车
				$(".gou").click(function(){
					var img=$(".mod-left img").attr("src");
					var jiage=$(".jiage").html();
					var num=$(".numberd").val();
					var title=$(".mod_title").html();
					if(parseInt($(".numberd").val())>0){
						$(".numb2").html("("+(shuzhi=shuzhi+1)+")");  //加入到购物车
						$(".queding").before("<div class='gouwuche_li'><div class='gouwuche_li_left'><img src="+img+" /></div><div class='gouwuche_li_right'><p>"+title+"</p><p>"+num+"件</p><p>价格"+jiage+"</p></div><div class='shancu'>X</div><div class='cleaer'></div></div>");
					}
					// 删除购物车
					$(".gouwuche_ul").find(".shancu").click(function(){
						var trued=confirm("你确定要删除吗");
						if(trued==true){
							
						}
					})
				})
			});
		}
	});
})
// **********************非ajax***********************
$(function(){
	// 登录以及注册登录框位置固定
	$(".loging ul li").eq(0).click(function() {
		$(".mod").eq(1).show().children(".mod_login").show();
		var n = (window.innerHeight - $(".mod").eq(1).children(".mod_login").height() - 100) / 2;
		$(".mod").eq(1).children(".mod_login").css("top", n);
	});
	$(".loging ul li").eq(2).click(function() {
		$(".mod").eq(2).show().children(".mod_login").show();
		var n = (window.innerHeight - $(".mod").eq(2).children(".mod_login").height() - 100) / 2;
		$(".mod").eq(2).children(".mod_login").css("top", n);
	});
	// 打开订单网页
	$(".loging ul li").last().click(function(){
		window.open("../WebCode/list.html");
	});
	// 关闭模态框
	$(".xx").click(function() {
		$(".mod").hide();
		$(".mod_login").hide();
		$(".modtwo").hide()
	});

	// 订单中心及跳转
	$(".bar-right").load("../WebCode/list_right.html .alllist");
	// 我的交易定义路径
	var classlist=[".alllist",".tuihuo",".home"];
	// 我的账户定义路径
	var classlist_two=[".detlie"];
	$(".bar-left dl").eq(0).children("dd").click(function(){
		$(".bar-right").load("../WebCode/list_right.html "+classlist[$(this).index()-1]);
		$.getScript("../WebCode/js/settime.js");
	});
	$(".bar-left dl").eq(1).children("dd").click(function(){
		$(".bar-right").load("../WebCode/list_right.html "+classlist_two[$(this).index()-1]);
		$.getScript("../WebCode/js/settime.js");
	});
	// 默认订单页js
	$.getScript("../WebCode/js/settime.js");
	// 导航跳转
	var lujing=["../WebCode/index.html","../WebCode/classify.html","../WebCode/Fashion.html",
		"../WebCode/Best.html","../WebCode/Story.html"
	];
	// 单击列表跳转不同的网页
	$("header ul li").click(function(){
		location.href=lujing[$(this).index()];
	});
	// 在移动端的时候，单击按钮显示菜单
	$(".anniu").click(function(){
		$("header ul").slideToggle(400);
	});
	// 给每个图片添加自适应  除了table下面的img
	$("img").addClass("img-responsive")
	$("table img").removeClass("img-responsive");
	// bar-left添加样式
	$(".bar-left dd").click(function(){
		$(".bar-left dd").removeClass("active");
		$(this).addClass("active");
	})
});
// ---------------以上第一个function函数------------

// 打开注册登录框并固定位置
function zhuce(){
	$(".mod").eq(1).hide()
	$(".mod").eq(2).show().children(".mod_login").show();
	var n = (window.innerHeight - $(".mod").eq(2).children(".mod_login").height() - 100) / 2;
	$(".mod").eq(2).children(".mod_login").css("top", n);
}
// 打开登录登录框并固定位置
function loging(){
	$(".mod").eq(2).hide()
	$(".mod").eq(1).show().children(".mod_login").show();
	var n = (window.innerHeight - $(".mod").eq(1).children(".mod_login").height() - 100) / 2;
	$(".mod").eq(1).children(".mod_login").css("top", n);
}
