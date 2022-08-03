"use strict";

var _tsyringe = require("tsyringe");

var _DayjsDateProvider = require("./DateProvider/implementations/DayjsDateProvider");

var _EtherealMailProvider = require("./MailProvider/implementations/EtherealMailProvider");

_tsyringe.container.registerSingleton("DayjsDateProvider", _DayjsDateProvider.DayjsDateProvider);

_tsyringe.container.registerInstance("EtherealMailProvider", new _EtherealMailProvider.EtherealMailProvider());