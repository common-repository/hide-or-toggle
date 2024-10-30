<?php
/**
 * Plugin Name:       Hide Or Toggle
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ignasi Tort
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hide-or-toggle
 *
 * @package           create-block
 */

// registers with metadata 
function hide_or_toggle_block_init() {
	register_block_type( __DIR__ . '/build/simple-hide' );
	register_block_type( __DIR__ . '/build/simple-toggle' );
	register_block_type( __DIR__ . '/build/simple-blocks' );
}
add_action( 'init', 'hide_or_toggle_block_init' );

function hide_or_toggle_scripts_load(){

	wp_register_script( 'hide_or_toggle_script', plugin_dir_url( __FILE__ ).'hide-or-toggle.js', array('jquery'));

	wp_enqueue_script('hide_or_toggle_script', '', array('jquery'), '1.0', true);
	wp_enqueue_style( 'dashicons' );
}

add_action( 'wp_enqueue_scripts', 'hide_or_toggle_scripts_load' );
add_action( 'enqueue_block_editor_assets', 'hide_or_toggle_scripts_load' );