
  // scroll desk related 
  var timer = null; 
  function scrolltrick() 
  { doso(); if(timer !== null) { clearTimeout(timer); }
  timer = setTimeout(function() { doso(); }, 2000); }
  setTimeout(doso, 3000); // setTimeout(doso, 0); 

  // adding the event listeners 
  window.addEventListener('scroll', scrolltrick, false); 
  window.addEventListener('resize', doso, false); 

  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
  if(!isdesk) { window.removeEventListener('scroll', scrolltrick, false);
  window.removeEventListener('resize', doso, false); }

  function doso()
  {
    const lopp = document.getElementById("Web_1920__1");
    lopp.style.paddingBottom = "918px"; var scaledHeight = lopp.clientHeight; 
    var actualHeight = document.documentElement.scrollHeight; // no scale done 
    var scaleRatio = scaledHeight/actualHeight; var nowScroll = window.scrollY; 
    var inner = window.innerHeight; var triggerPoint = 9056/scaleRatio - inner; 
    var actualBar = inner - document.documentElement.clientHeight; 
    var scaledBar = actualBar * scaleRatio; // scrollbar

    const mediaout = window.matchMedia("(min-width: 615px)").matches;
    var scmx = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    var scbb = scmx - nowScroll; var nunn = scbb * scaleRatio; var cscs = inner * scaleRatio; 
    var topp = 9056 - cscs - 400 + scaledBar; // top position top-pos

    var tran = scaleRatio * (nowScroll - triggerPoint) - scaledBar;
    const isdesk = navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i); 
    if(nowScroll > triggerPoint && mediaout && isdesk)
    {
        document.getElementById("out-cmnt").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-two").style.transform = "translateY("+tran+"px)";
        document.getElementById("hot-dvs-sctn").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-one").style.transform = "translateY("+tran+"px)";
        document.getElementById("top-pos").style.top = topp + "px";
        document.getElementById("top-pos").style.transform = "translateY("+tran+"px)";
        document.getElementById("top-pos").style.display = "block";
    }
    if(nowScroll < triggerPoint && mediaout && isdesk)
    {
        document.getElementById("top-pos").style.display = "none";
        document.getElementById("out-cmnt").style.transform = "translateY(0px)";
        document.getElementById("hot-dvs-sctn").style.transform = "translateY(0px)";
        document.getElementById("ads-vertical-one").style.transform = "translateY(0px)";
        document.getElementById("ads-vertical-two").style.transform = "translateY(0px)";
        document.getElementById("top-pos").style.transform = "translateY(0px)";
        document.getElementById("top-pos").style.top = "8934px"; 
    }
    if(nunn < 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "hidden";
    }
    if(nunn > 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "visible";
    }
  } 

  function sizeme() {
  doso(); // immediate call 
  var scwidth = screen.availWidth; 
  var outwidth = window.outerWidth; var inwidth = window.innerWidth; 
  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i));
  if(isdesk) { document.getElementById("top-pos").style.visibility = "hidden"; 
  clearTimeout(window.resizedFinished); window.resizedFinished = setTimeout(function() {  
  document.getElementById("top-pos").style.visibility = "visible"; doso(); }, 100); }
  if(isdesk && (scwidth == outwidth) && (outwidth - inwidth) < 70) { 
  clearTimeout(window.rizzFinished); window.rizzFinished = setTimeout(function() {  
  document.getElementById("out-cmnt").style.transform = "translateY(0px)";
  document.getElementById("hot-dvs-sctn").style.transform = "translateY(0px)";
  document.getElementById("ads-vertical-one").style.transform = "translateY(0px)";
  document.getElementById("ads-vertical-two").style.transform = "translateY(0px)";
  document.getElementById("top-pos").style.transform = "translateY(0px)";
  console.log("matched"); }, 40); } } 

  window.addEventListener('resize', sizeme); 
  if(!isdesk) { window.removeEventListener('resize', sizeme); } 
  // document ends here ---

