function prefixAssetPath(path: string): string {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    return '/bdp' + path;

  }

  return path;
}



export default prefixAssetPath
