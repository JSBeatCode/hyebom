module.exports = {
    apps: [
        {
            name: 'hyebom',
            script: './server.cjs',
            exec_mode: 'cluster',
            watch: true,
            instances: 3
        }
    ]
}