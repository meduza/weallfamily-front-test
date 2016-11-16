export default {
    src: [
        'src/components/App/index.js',
        'src/components/Login/constants/index.js',
        'src/components/Login/index.js',
        'src/helpers/getCookie.js',
        'src/components/App/reducers/index.js',
    ],
    out: 'scripts.js',
    entry: 'src/components/app',
    format: 'iife',
    dest: 'build'
}
