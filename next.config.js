/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
        prependData: `@import "/styles/abstracts/index.scss";`,
    },
    //reactStrictMode: false,
}

module.exports = nextConfig
