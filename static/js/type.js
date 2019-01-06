/*测试用户是否有此字体 test if user have certain type of font*/


    (function(d) {
        var isSupportFontFamily=function(f){if(typeof f!="string"){return false}var h="Arial";if(f.toLowerCase()==h.toLowerCase()){return true}var e="a";var d=100;var a=100,i=100;var c=document.createElement("canvas");var b=c.getContext("2d");c.width=a;c.height=i;b.textAlign="center";b.fillStyle="black";b.textBaseline="middle";var g=function(j){b.clearRect(0,0,a,i);b.font=d+"px "+j+", "+h;b.fillText(e,a/2,i/2);var k=b.getImageData(0,0,a,i).data;return[].slice.call(k).filter(function(l){return l!=0})};return g(h).join("")!==g(f).join("")};
        isSupportFontFamily('Source Han Serif')!=true;
        var config = {kitId: 'psl0zxh',scriptTimeout: 3000,async: true},
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);

