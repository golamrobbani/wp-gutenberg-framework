/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { setCategories } from "@wordpress/blocks";
import { Icon } from "@wordpress/components";

setCategories([
  {
    slug: "tutorial",
    title: __("Guten cat Title", "tutorial"),
    icon: <Icon icon={"wordpress"} />,
  },
  ...getCategories().filter(({ slug }) => slug !== "tutorial"),
]);
