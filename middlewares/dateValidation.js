const vd = require('give-me-date');

module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    const { watchedAt } = talk;
    const options = { format: 'dd/mm/yyyy'} // this set the tipe of date
    const validation = vd.validate(watchedAt, options);
    if (!watchedAt) return res.status(400).json({ message:"O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"});
    if (!validation) return res.status(400).json({ message:"O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""});
    return next();  
  } catch (error) {
    return next(e);
  };
};