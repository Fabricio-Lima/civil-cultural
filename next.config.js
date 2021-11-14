const { i18n } = require('./next-i18next.config')

module.exports = {
  webpack5: true,
  i18n,
  images: {
    domains: [
      'storage.googleapis.com',
      'img.freepik.com'
    ]
  }
}