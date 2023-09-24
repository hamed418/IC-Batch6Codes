import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="Todos">Todos</Link>
      <Link to="/Posts">Posts</Link>
    </div>
  );
};

export default Nav;
