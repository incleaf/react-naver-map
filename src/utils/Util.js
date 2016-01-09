class Util {
    loadScript(url) {
        return new Promise(
            function(resolve, reject) {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;

                script.onreadystatechange = resolve;
                script.onload = resolve;

                head.appendChild(script);
            }
        );
    }

    jsonToQueryString(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return "?" + str.join("&");
    }
}

export default Util;
