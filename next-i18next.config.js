module.exports = {
    i18n: {
    defaultLocale: 'en-US',
        locales: [
            'en-US',
            'pt-BR',
            'es-ES',
            'ar-AA'
        ],
    reloadOnPrerender: process.env.APP_ENV == 'dev'
    },
}