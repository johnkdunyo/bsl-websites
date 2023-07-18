function prefixAssetPath(path: string): string {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    return '/isg' + path;

  }

  return path;
}



export default prefixAssetPath
