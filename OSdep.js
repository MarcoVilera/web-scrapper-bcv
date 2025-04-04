const { exec } = require('child_process');
const os = require('os');

const platform = os.platform();

const dependencies = {
    win32: 'node-windows',
    darwin: 'node-mac',
    linux: 'node-linux'
}

const dependency = dependencies[platform];

if (dependency) {
    exec(`npm install ${dependency}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Dependency installed successfully');
        console.log(stdout);
        if (stderr) console.error(stderr)
    });
} else {
    console.error('Unsupported platform');
}