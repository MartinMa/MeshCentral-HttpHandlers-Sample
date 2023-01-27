/** 
* @description MeshCentral Http Handlers Sample Plugin
* @author Martin Mädler
* @copyright 
* @license Apache-2.0
* @version v0.0.1
*/

"use strict";

module.exports.http_handlers_sample = function (obj, parent) {
    for (var i in parent.config.domains) {
        // This is a subdomain with a DNS name, no added HTTP bindings needed.
        if ((parent.config.domains[i].dns != null) || (parent.config.domains[i].share != null)) { continue; }
        var domain = parent.config.domains[i];
        var url = domain.url;
        // Add custom endpoints here.
        obj.app.get(url + 'api/custom', function (req, res) {
            // Optionally check for active user session here.
            // Example of a simple REST API returning a JSON object.
            res.set({ 'Content-Type': 'application/json' });
            res.status(200);
            res.send(JSON.stringify({
                value: 'test'
            }));
        });
    }
}
