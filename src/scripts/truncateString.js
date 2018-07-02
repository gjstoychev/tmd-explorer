const truncateString = (str, limit) => {
  if (str.length < limit) {
    return str;
  }

  const truncated = str.slice(0, limit);

  return `${truncated}...`;
}

export default truncateString;