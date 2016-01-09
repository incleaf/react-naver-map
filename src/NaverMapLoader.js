import Util from './utils/Util.js';

class NaverMapLoader {

    constructor(props) {
        this.util = new Util();
        this.mapOptions = this.configureOptions(props);
        this.elementId = props.elementId;

        return this;
    }

    configureOptions(props) {
        let options = {
            key: props.apiKey || null,
            version: props.version || 2.0
        }

        return options;
    }


    init() {
        let naverMapLoadingUrl = "http://openapi.map.naver.com/openapi/naverMap.naver";
        let queryString = this.util.jsonToQueryString(this.mapOptions);
        let url = naverMapLoadingUrl + queryString;

        this.map = this.util.loadScript(url, null)
                    .then(function(result) {
                            return true;
                    }).then(function(result) {
                            return this.getMap();
                    }.bind(this));
    }

    getMap() {
        const map = new nhn.api.map.Map(this.elementId, {});
        return map;
    }


}

export default NaverMapLoader;
