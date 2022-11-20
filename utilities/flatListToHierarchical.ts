import {
  NavigationMenuItemFragmentFragment,
  HierarchicalNavigationMenuItemFragment,
} from "client";

export default function flatListToHierarchical(
  data = [] as NavigationMenuItemFragmentFragment[]
) {
  const idKey = "id",
    parentKey = "parentId",
    childrenKey = "children";

  const tree = [] as HierarchicalNavigationMenuItemFragment[];
  const childrenOf = {};

  data.forEach((item) => {
    const newItem = { ...item } as HierarchicalNavigationMenuItemFragment;
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;

    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];

    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });

  return tree;
}
