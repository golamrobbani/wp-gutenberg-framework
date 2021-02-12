<?php
/**
 * Golobal Function
 *
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function my_mario_block_category($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'mario-blocks',
                'title' => __('Mario Blocks', 'mario-blocks'),
            ),
        )
    );

}
add_filter('block_categories', 'my_mario_block_category', 10, 2);
