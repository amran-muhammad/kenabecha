// Mobile Menu Dropdown
$(".icon_click").click(function() {
    $(".mobile_menu_dropdown, .all_toggles, .icon_click, .icon_rmv").addClass("active");
    $("html").addClass("modal-open");
});

$(".icon_rmv, .all_toggles").click(function() {
    $(".mobile_menu_dropdown, .all_toggles, .icon_rmv, .icon_click").removeClass("active");
    $("html").removeClass("modal-open");
});

//Catewgory Modal
$(".cat_click").click(function() {
    $("._cat_modal").addClass("_cat_modal_open");
});

$("._cat_modal_close").click(function() {
  $("._cat_modal").removeClass("_cat_modal_open");
});

// Mobile Menu iteam select
$(document).ready(function () {
    $(".mbl_select_iteam_in").click(function () {
        $(this).toggleClass("icon").siblings().slideToggle(300);
    })
});

//Catewgory Modal
$("#_modal_click").click(function() {
    $("#_modal").addClass("_modal_open");
});

$("#_modal_close, #_modal_bg").click(function() {
    $("#_modal").removeClass("_modal_open");
});


// Mobile Menu iteam select
$(document).ready(function () {
    $("._1Collapse_heading").click(function () {
        $(this).toggleClass("_1Collapse_heading_arrow_chn").siblings().slideToggle(300);
    })
});
// //MENU SEARCH OPEN
// $(document).ready(function(){
//   $("#_menu_search_click").click(function(){
//     if ($("#_menu_search_click").hasClass("_menu_search_icons")) {
//       $("#_menu_search").removeClass("_menu_search_js").addClass( "_menu_search_open" );
//       $("#_menu_list").removeClass(" _menu_list_js").addClass( "_menu_list_close" );
//     }
//   });

//   $("#_menu_search_close").click(function(){
//     if ($("#_menu_search_close").hasClass("_menu_search_close")) {
//       $("#_menu_search").addClass("_menu_search_js").removeClass( "_menu_search_open" );
//       $("#_menu_list").addClass("_menu_list_js").removeClass( "_menu_list_close" );
//     }
//   });
// });

// //MENU THREE OPEN
// $(document).ready(function(){
//   $("#_3menu_search_click").click(function(){
//       $("#_3content_withMenu").removeClass(" _3content_withMenu").addClass( "_3content_withMenu_open" );
//       $("#_3menu_side_all").removeClass(" _3menu_side_all").addClass( "_3menu_side_all_open" );
//       $("#_3menu_side").addClass( "_3menu_side_open" );
//   });

//   $("#_3menu_search_close").click(function(){
//       $("#_3content_withMenu").removeClass(" _3content_withMenu_open").addClass( "_3content_withMenu" );
//       $("#_3menu_side_all").addClass(" _3menu_side_all").removeClass( "_3menu_side_all_open" );
//       $("#_3menu_side").removeClass( "_3menu_side_open" );
//   });
// });

// //MENU FOUR
// $(document).ready(function(){
//   $("#_4menu_search_click").click(function(){
//       $("#_4menu_side").removeClass(" _4menu_side_close").addClass( "_4menu_side_open" );
//   });

//   $("#_4menu_search_close").click(function(){
//       $("#_4menu_side").removeClass(" _4menu_side_open").addClass( "_4menu_side_close" );
//   });
// });


// //SCROLL MENU
// $(document).ready(function(){
//   var scrollTop = 40;
//   $(window).scroll(function(){
//     scrollTop = $(window).scrollTop();
//     if (scrollTop >= 100) {
//       $('#menu').removeClass("_slider_menu").addClass("_menu_bg_white");
//     } else  {
//       $('#menu').removeClass("_menu_bg_white").addClass("_slider_menu");
//     } 
//   });
// });


// // $(document).addEventListener('DOMContentLoaded', function() {
// //   var elems = document.querySelectorAll('.parallax');
// //   var instances = M.Parallax.init(elems, options);
// // });


// // //PORTFOLIO CARD
// // $( document ).ready(function() {
// //     $( ".portfolio_card_common" )
// //       .mouseenter(function() {
// //         $("#_11card_portfolio_card_two").removeClass('_11card_active');
// //       })
// //       .mouseleave(function() {
// //         $("#_11card_portfolio_card_two").addClass('_11card_active');
// //     });
// // });