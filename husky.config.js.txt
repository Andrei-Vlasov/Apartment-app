module.exports = {
    hooks: {
        'pre-commit': 'npm run nest-lint && npm run front-lint',
        'pre-push': 'npm run nest-lint && npm run front-lint'
    }
}