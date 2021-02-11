<?php
/**
 * Load general WP action hook
 *
 */

namespace Tutorial\Includes;

/**
 * Register our blocks.
 *
 * @package Tutorial
 */

defined('ABSPATH') || exit();

/**
 * Load registration for our blocks.
 *
 * @since 1.0.0
 */
class Register_Blocks
{

    /**
     * This plugin's instance.
     *
     * @var Register_Blocks
     */
    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new Register_Blocks();
        }
    }

    /**
     * The Plugin slug.
     *
     * @var string $slug
     */
    private $slug;

    /**
     * The Constructor.
     */
    public function __construct()
    {
        $this->slug = 'tutorial';

        add_action('init', array($this, 'register_blocks'), 99);
        //add_filter('block_categories', array($this, 'register_category'), 10, 2);
    }

    /**
     * Add actions to enqueue assets.
     *
     * @access public
     */
    public function register_blocks()
    {

        // Return early if this function does not exist.
        if (!function_exists('register_block_type')) {
            return;
        }

        register_block_type('tutorial/example-01-basic-esnext', array(
            'apiVersion' => 2,
            'editor_script' => 'gutenberg-examples-01-esnext',
        ));

        // Shortcut for the slug.
        // $slug = $this->slug;
        // register_block_type(
        //     $slug . '/alert',
        //     array(
        //         'editor_script' => $slug . '-editor',
        //         'editor_style' => $slug . '-editor',
        //         'style' => $slug . '-frontend',
        //     )
        // );
    }

    /**
     * Register our block category
     *
     * @param array $categories array block categories.
     * @param object $post post object.
     *
     * @return array
     * @since 1.0.0
     *
     */
    public function register_category($categories, $post)
    {
        if (!in_array($post->post_type, array('page', 'post'))) {
            return $categories;
        }

        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'tutorial',
                    'title' => __('Tutorial', 'tutorial'),
                ),
            )
        );
    }
}

//Register_Blocks::register();
