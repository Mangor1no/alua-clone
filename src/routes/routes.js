import pages from 'pages';
import * as paths from './paths';

const Discover = {
  renderComponent: pages.Discover,
  path: paths.ROUTE_DISCOVER,
  isPrivate: false,
  exact: true,
};

const Profile = {
  renderComponent: pages.Profile,
  path: paths.ROUTE_PROFILE,
  isPrivate: false,
  exact: true,
};

const Login = {
  renderComponent: pages.Login,
  path: paths.ROUTE_LOGIN,
  isPrivate: false,
  exact: true,
};

const Register = {
  renderComponent: pages.Register,
  path: paths.ROUTE_REGISTER,
  isPrivate: false,
  exact: true,
};

// const Editor = {
//   renderComponent: pages.Editor,
//   path: paths.ROUTE_EDITOR,
//   isPrivate: true,
//   exact: true,
// };

// const Admin = {
//   renderComponent: pages.Admin,
//   path: paths.ROUTE_ADMIN,
//   isPrivate: true,
//   exact: true,
// };

// const Article = {
//   renderComponent: pages.Article,
//   path: paths.ROUTE_ARTICLE,
//   isPrivate: false,
//   exact: true,
// };

export default [Discover, Profile, Login, Register];
