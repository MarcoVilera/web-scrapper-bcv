import os from "os"


if (os.platform() === 'linux') {
    const Service = require('node-windows').Service;
    const svc = new Service({
        name: 'BCV Service',
        description: 'Get the value of the dollar and the euro from the BCV',
        script: './index.js',
        nodeOptions: [
            '--harmony',
            '--max_old_space_size=4096'
        ]
    });
    svc.on('install', function () {
        svc.start();
    });
    svc.install();
}

if (os.platform() === 'win32') {
    const Service = require('node-windows').Service;
    const svc = new Service({
        name: 'BCV Service',
        description: 'Get the value of the dollar and the euro from the BCV',
        script: './index.js',
        nodeOptions: [
            '--harmony',
            '--max_old_space_size=4096'
        ]
    });
    svc.on('install', function () {
        svc.start();
    });
    svc.install();
}

if (os.platform() === 'darwin') {
    const Service = require('node-mac').Service;
    const svc = new Service({
        name: 'BCV Service',
        description: 'Get the value of the dollar and the euro from the BCV',
        script: './index.js',
        nodeOptions: [
            '--harmony',
            '--max_old_space_size=4096'
        ]
    });
    svc.on('install', function () {
        svc.start();
    });
    svc.install();
}