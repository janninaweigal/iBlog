module.exports = {
    apps : [{
      name: 'API',
      script: 'start',
  
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  
    deploy : {
      production : {
        user : 'root',
        host : '111.230.236.23',
        ref  : 'origin/master',
        repo : 'https://github.com/janninaweigal/iBlog.git',
        path : '/bingo',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
      }
    }
  };
  