module.exports = {
  apps: [{
    name: 'vendori-website-app',
    script: '.next/standalone/server.js',
    cwd: '/usr/www/users/vendop/website/Vendori-2',
    interpreter: 'node',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0'
    }
  }]
}
