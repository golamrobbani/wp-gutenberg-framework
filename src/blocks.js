/**
 * Internal dependency
 */
//import "./utils/block-category";
import * as alert from "./blocks/alert";
import * as author2 from "./blocks/author2";

import * as hello from "./blocks/hello";

//import * as pricing from "./blocks/pricing-table";

/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = (block) => {
  if (!block) {
    return;
  }

  const { name, category, settings } = block;

  registerBlockType(name, {
    category: category,
    ...settings,
  });
};

/**
 * Function to register blocks.
 */
const registerTutorialBlocks = () => {
  [hello, alert, author2].forEach(registerBlock);
};

registerTutorialBlocks();
