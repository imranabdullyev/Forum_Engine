<script type="text/javascript" src="js/jquery-2.2.1.js">
<script src="lib/js/wysihtml5-0.3.0.js">
<script src="lib/js/jquery-1.7.2.min.js">
<script src="lib/js/prettify.js">
<script src="lib/js/bootstrap.min.js">   
<script src="src/bootstrap-wysihtml5.js">
<script src="js/bootstrap.min.js"> 






$(document).ready(function(){

$(".input-group").click(function(){
$("#Please").removeClass("display");
});
$(".input-group").click(function(){
$(".hero-unit").slideDown ();
});
$(".close").click(function(){
 $(".hero-unit").slideUp();
});

$('.dropdown-toggle').dropdown();

  $(window).scroll(function () { 
   if ($(window).scrollTop() >= $(document).height() - $(window).height() ) {
   alert("gfdghsg");}  
});



  $('.textarea').wysihtml5();




  $(prettyPrint);


 $('#myModal').on('shown.bs.modal', function () {
 $('#myInput').focus();
});   





});


   var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-30181385-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();


function AutoComp(){
  var a =document.getElementById('MySearch').autocomplate;             
   }           
};