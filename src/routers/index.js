import glob from 'glob';

export default app => {
  const files = glob.sync('src/routers/**/*.js');

  files.forEach(file => {
    if (file === 'src/routers/index.js') return;
    const routeName = file.replace(/.js$/, '').replace('src/routers', '');

    // eslint-disable-next-line
    app.use(routeName, require(`.${routeName}`).default);
  });
};
