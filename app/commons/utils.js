const getPagination = (page, size) => {
  const limit = size ? +size : 0;
  const offset = page ? page * limit : 0;

  return { limit, offset };
}

export {
  getPagination,
};