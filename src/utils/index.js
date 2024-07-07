function capitalizeFirstLatter(str) {
  if (!/^[A-Za-z]/.test(str)) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

// eslint-disable-next-line import/prefer-default-export
export { capitalizeFirstLatter };
