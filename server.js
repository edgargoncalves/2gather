var locomotive = require('locomotive');
    
var options = {};
options.address = options.address || process.env.IP || '0.0.0.0';
options.port = options.port || process.env.PORT || 3000;
options.env = options.env || process.env.NODE_ENV || 'development';
options.debug=false;
options.dbgPort=15454;

locomotive.cli.server(options.app || process.cwd(), options.address, options.port, options.env, options);
