Ethereum Network Intelligence API
============
This is the backend service which runs along with ethermint and tracks the network status, fetches information through JSON-RPC and connects through WebSockets to [eth-netstats](https://github.com/tendermint/eth-netstats) to feed information.


## Prerequisite
* node & npm

## Setup
  To install all dependencies run following commands:
  ```
    npm i
    npm -g pm2
  ```

## Configuration
  Configuration uses `pm2` for running node. You will need to either create `app.json` manually from `app.json.example` or generate it using automated script.

### Automated
  For automated install run  
```bash
node scripts/configure.js
```
  it will generate `./app.json`

### Manual
  You can copy `app.json.example` to `app.json` and modify it, only values that needs to be modified are under `"env"` object. 

```javascript
"env":
	{
		"NODE_ENV"        : "production", // tell the client we're in production environment
		"RPC_HOST"        : "localhost", // eth JSON-RPC host
		"RPC_PORT"        : "8545", // eth JSON-RPC port
		"LISTENING_PORT"  : "30303", // eth listening port (only used for display)
		"INSTANCE_NAME"   : "", // whatever you wish to name your node
		"CONTACT_DETAILS" : "", // add your contact details here if you wish (email/skype)
		"WS_SERVER"       : "wss://eth-netstats-venus.herokuapp.com/", // path to eth-netstats WebSockets api server
		"WS_SECRET"       : "Check out our slack channel", // WebSockets api server secret used for login
		"VERBOSITY"       : 2 // Set the verbosity (0 = silent, 1 = error, warn, 2 = error, warn, info, success, 3 = all logs)
	}
```

## Run

### Start
Run it using pm2:
```bash
pm2 start.app.json
```

### Stop
```bash
pm2 stop app.json
```

### Delete
```bash
pm2 delete app.json
```

### Checkout service running
```bash
pm2 status intelligence-api
```

### Details
```bash
pm2 show intelligence-api
```

### Checkout logs
```bash
pm2 logs intelligence-api
```
