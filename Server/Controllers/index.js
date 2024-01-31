/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayHome(req, res, next)
{
  res.render('index', {title: 'Home', page: 'home'});
}

function DisplayAbout(req, res, next)
{
  res.render('index', {title: 'About Us', page: 'about'});
}

function DisplayProducts(req, res, next)
{
  res.render('index', {title: 'Our Products', page: 'products'});
}

function DisplayServices(req, res, next)
{
  res.render('index', {title: 'Our Services', page: 'services'});
}

function DisplayContact(req, res, next)
{
  res.render('index', {title: 'Contact Us', page: 'contact'});
}

module.exports = {
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout,
 DisplayProducts: DisplayProducts,
 DisplayServices: DisplayServices,
 DisplayContact: DisplayContact
}

  