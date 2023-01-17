const UrlUtils = {
    extractID (uri) {
        // return uri.substr(uri.length - 36);
        return uri.split('-').pop();
    }
}

export default UrlUtils