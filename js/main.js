!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error("VL snippet loaded twice.")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement("script");f.type="text/javascript",f.id="vrlps-js",f.defer=!0,f.src="https://app.viral-loops.com/client/vl/vl.min.js";var g=document.getElementsByTagName("script")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:"ready",cb:a})},e}))}();var campaign=VL.load("PHybBMcbieRGHHH3Hbhu4sQbNZc",{autoLoadWidgets:!0});

$(".submitbutton").click(function(e) {  
  //prevent default form action
  e.preventDefault();
  //get the form data
  var data = $(".emailfield").val();
  console.log("submit")
  campaign.identify({
      email: data.value
  }, function() {
      //optional callback
      //you can hide the form here and show the widgets
  });

});

//when the campaign boots
campaign.addHook("boot", function() {
  console.log("boot")
  //if we have a logged in user
  // if (campaign.user && campaign.user.referralCode) {
      //show the widgets
  $("#widgets_container").show();
  // } else {
  //     //show the form
  //     $("#form_container").show();
  // }
});