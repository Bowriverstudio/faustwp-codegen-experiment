import { NavigationMenuItemFragmentFragment } from "./graphql.generated";
export * from "./graphql.generated";

export interface HierarchicalNavigationMenuItemFragment
  extends NavigationMenuItemFragmentFragment {
  children: HierarchicalNavigationMenuItemFragment[];
}
