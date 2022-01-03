### Check the ubuntu container name
`docker container ls -a`

In my case, the name is great_bose

### Restart the ubuntu container 
`docker start -i great_bose`

### Install nano
```
apt-get update
apt-get -y install nano
```

### Edit index.js
`nano /usr/src/app/index.js`

Add `console.log('Hello World')` to index.js

