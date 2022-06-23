#!/usr/bin/env node

const Application = require('../src/application');

const application = new Application(); // TODO: provide Lambda instance from args

application.boot();
