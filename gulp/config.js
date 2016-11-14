export default {
    src: [
        'src/components/app/app.js',
        'src/components/app/constants/USER.js',
        'src/components/app/directives/Login.js',
        'src/components/app/helpers/getCookie.js',
        'src/components/app/reducers/userReducer.js',
    ],
    out: 'scripts.js',
    entry: 'src/components/app/app.js',
    format: 'iife',
    dest: 'build'
}
