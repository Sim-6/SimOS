var browserName = (function (agent) {        switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
}
  

$('body').terminal({

    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },
    cat: function() {
        this.echo($('<img src="https://cataas.com/cat">'));
    },
    ls: function() {
        this.echo($('<p>S:/SimOS/desktop/terminal/</p><ul><li>terminal.html</li><li>terminalscript.js</li></ul>'))
    },
    info: function() {
        this.echo($('<p>SimOS Version: Alpha-01</p>'))
    },
    sysinfo: function() {
        this.echo("Browser:" + " " +browserName + " " + "System:" + " " + getOS())
    },
    help: function() {
        this.echo($('<ul><li>hello + name</li><li>cat</li><li>ls</li><li>info</li><li>sysinfo</li><li>clear</li></ul>'))
    },
    neofetch: function () {
        this.echo(greetings.innerHTML)
        this.echo("System:" + " " +getOS())
        this.echo("Browser:" + " " +browserName)
        
    },
    logo: function() {
        this.echo(greetings.innerHTML)
    },
    exit: function() {
        window.close();
    }
}, {
    greetings: greetings.innerHTML
});
