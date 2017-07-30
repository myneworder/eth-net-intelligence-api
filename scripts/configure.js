const path = require('path');
const prompt = require('prompt');
const util = require('util');
const fs = require('fs');

const Template = require(path.join(__dirname, './app.json'));
const dest = path.join(__dirname, '../app.json');

const schema = {
  properties: {
    RPC_HOST: {
      description: 'RPC Host of Ethermint',
      default: 'localhost'
    },
    RPC_PORT: {
      pattern: /^[0-9]{1,5}$/,
      type: 'integer',
      description: 'RPC Port of Ethermint',
      message: 'Port should be Integer',
      default: 8545
    },
    TENDERMINT_RPC_PORT: {
      pattern: /^[0-9]{1,5}$/,
      description: 'RPC Port of Ethermint',
      type: 'integer',
      message: 'Port should be Integer',
      default: 46657
    },
    INSTANCE_NAME: {
      pattern: /^[0-9a-z\-]{5,20}$/i,
      description: 'Instance Name',
      message: 'Name should contain alphanumeric string(and dash) with length from 5 to 20',
      required: true
    },
    CONTACT_DETAILS: {
    },
    WS_SECRET: {
      required: true,
      hidden: true,
      replace: '*'
    }
  }
};

prompt.start();

prompt.get(schema, (err, res) => {
  if (err) {
    console.error('Couldn\'t validate inputs', err);
    return;
  }

  util._extend(Template[0].env, res);

  fs.writeFileSync(dest, JSON.stringify(Template));
  console.log('Configuration has been generated');
});

