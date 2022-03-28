module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('you do not have access to view this page');

    next();
  } catch (error) {
    next(error);
  }
};
