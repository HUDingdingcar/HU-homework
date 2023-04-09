module.exports = function (source) {
  const result = source.replace('const','var');
  return result;
};
