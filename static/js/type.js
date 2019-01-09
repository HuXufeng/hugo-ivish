(function(d) {
    // https://www.kirupa.com/html5/detect_whether_font_is_installed.htm
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var text = "abcdefghijklmnopqrstuvwxyz0123456789";
    context.font = "72px monospace";
    var size = context.measureText(text).width;
    var fonts = [' SC', ' CN', ' TC', ' TW', ''];
    for (var i = 0; i < fonts.length; i++) {
      context.font = "72px '" + 'Source Han Serif' + fonts[i] + "', monospace";
      // no need to load TypeKit if Source Hans Serif has been installed
      if (context.measureText(text).width != size) return;
    }
    var link = document.createElement("link");link.setAttribute("rel"="stylesheet");link.setAttribute("href","https://fonts.googleapis.com/css?family=Noto+Serif+SC:400,700");document.getElementsByTagName("head")[0].appendChild(link);
  })(document);