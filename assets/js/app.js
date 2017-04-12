(function($) {

	"use strict";

	var $html = $("html");

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var global_functions = {
		init: function() {
			var self = this;

			self.dashSmooth();
			self.nav();
			self.scrollTrigger();
		},


		scrollTrigger: function() {
			$(window).on('scroll', function() {
				var offset = 0; //Titik awal Scroll
				var tinggi_layar = $(window).height();	//Menghitung Tinggi Layar
				var tinggi_maks_scroll = $('body').height() + tinggi_layar; //Menghitung Tinggi Scroll
				var posisi_scroll_y = window.pageYOffset; //Menghitung Posisi Scroll Y

				var posisi_scroll = $('#materi').offset().top; //Posisi Trigger
				var titik_batas_scroll = posisi_scroll - (tinggi_layar * offset);
				var titik_batas = posisi_scroll_y > titik_batas_scroll; 
				var sisa_titik_batas = tinggi_maks_scroll <= posisi_scroll_y && !titik_batas;

			    if (titik_batas || sisa_titik_batas) {
			        $('.button--to-top').addClass("button--to-top--show");
			    }else{
			        $('.button--to-top').removeClass("button--to-top--show");
			    }
			});
		},

		dashSmooth: function() {
			$(function() {
			  $('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});
		},

		nav: function() {
			var nav1 = $("nav a:first-child");
			var nav2 = $("nav a:last-child");

			nav1.click(function(){
				nav1.addClass("active");
				nav2.removeClass("active");
			});
			nav2.click(function(){
				nav1.removeClass("active");
				nav2.addClass("active");
			});
		}
	};

	$(document).ready(function() {
		global_functions.init();
		
	});

})(jQuery); 