const express = require('express');
const router = express.Router();
const bitcoind = require('logic/bitcoind.js');
const auth = require('middlewares/auth.js');
const safeHandler = require('utils/safeHandler');

router.get('/ip', auth.jwt, safeHandler((req, res) =>
  bitcoind.getExternalIP()
    .then(ip => res.json(ip))
));

router.get('/blockcount', auth.jwt, safeHandler((req, res) =>
  bitcoind.getBlockCount()
    .then(blockCount => res.json(blockCount))
));

router.get('/connections', auth.jwt, safeHandler((req, res) =>
  bitcoind.getConnectionsCount()
    .then(connections => res.json(connections))
));

router.get('/status', auth.jwt, safeHandler((req, res) =>
  bitcoind.getStatus()
    .then(status => res.json(status))
));

router.get('/sync', auth.jwt, safeHandler((req, res) =>
  bitcoind.getSyncStatus()
    .then(status => res.json(status))
));

router.get('/version', auth.jwt, safeHandler((req, res) =>
  bitcoind.getVersion()
    .then(version => res.json(version))
));

module.exports = router;
