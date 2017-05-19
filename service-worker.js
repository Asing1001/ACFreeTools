var CACHE_NAME = 'doolb-cache-v1';
importScripts('./libs/sw-toolbox.js');
toolbox.router.get(/.*/,toolbox.fastest,{});