import withSidebarLayout from "./withSidebarLayout";
import WithRouter from "./WithRouter";
import withMovieConfig from "./withMovieConfig";

export const pageWithoutLayout = Wrapped => {
  return withMovieConfig(WithRouter(Wrapped));
};
export const pageWithLayout = Wrapped => withSidebarLayout(Wrapped);

export default pageWithLayout;
