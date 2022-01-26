import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="/">All</NavLink>
      <NavLink to="/active">Active</NavLink>
      <NavLink to="/completed">Completed</NavLink>
    </>
  );
};

export default Navigation;
