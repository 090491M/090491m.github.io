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