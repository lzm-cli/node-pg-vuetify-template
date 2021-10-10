pm2 stop app.js
NODE_ENV=production pm2 start -o log/out.log -e log/err.log app.js
