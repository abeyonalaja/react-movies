import withSidebarLayout from "./withSidebarLayout";
import WithRouter from "./WithRouter";

export const PageWithoutLayout = Wrapped => {
  return WithRouter(Wrapped);
};
export const pageWithLayout = Wrapped => withSidebarLayout(Wrapped);

export default pageWithLayout;
