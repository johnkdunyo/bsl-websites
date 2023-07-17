function prefixAssetPath(path: string): string {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    console.log('rest', "/bsl" + path)
    return '/bsl' + path;

  }

  return path;
}



export default prefixAssetPath
