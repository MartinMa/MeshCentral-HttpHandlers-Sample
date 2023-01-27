# MeshCentral-HttpHandlers-Sample

*Released: 2023-01-27*

Sample plugin for [MeshCentral2](https://github.com/Ylianst/MeshCentral) hook to setup custom http handlers.

## Installation

First please make sure that you enable plugins in the configuration:
```json
"plugins": { "enabled": true },
```
Restart your MeshCentral server after making this change.

 To install, simply add the plugin configuration URL when prompted:
 `https://raw.githubusercontent.com/MartinMa/MeshCentral-HttpHandlers-Sample/master/config.json`

## Features
Adds a custom http handler for path `api/custom` that returns a simple JSON object.
