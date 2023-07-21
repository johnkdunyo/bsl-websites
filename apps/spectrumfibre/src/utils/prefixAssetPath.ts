function prefixAssetPath(path: string): string {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    return '/spectrumfibre' + path;

  }

  return path;
}



export default prefixAssetPath
