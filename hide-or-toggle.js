/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';
jQuery(document).ready(function () {
    
    /* simple-hide */
    jQuery(".wp-block-hide-or-toggle-simple-hide .show").click(function () {
        jQuery(this).nextAll(".wp-block-hide-or-toggle-simple-hide .hidden").show();
        jQuery(this).prev(".wp-block-hide-or-toggle-simple-hide .hide").show();
    });

    jQuery(".wp-block-hide-or-toggle-simple-hide .hide").click(function () {
        jQuery(this).nextAll(".wp-block-hide-or-toggle-simple-hide .hidden").hide();
        jQuery(".wp-block-hide-or-toggle-simple-hide .hide").hide();
    });

    /* simple-toggle */
    jQuery(".wp-block-hide-or-toggle-simple-toggle.slow .title").click(function () {
        jQuery(this).next(".wp-block-hide-or-toggle-simple-toggle .hidden").slideToggle("slow");
    });

    jQuery(".wp-block-hide-or-toggle-simple-toggle.fast .title").click(function () {
        jQuery(this).next(".wp-block-hide-or-toggle-simple-toggle .hidden").slideToggle("fast");
    });

    /*  simple-blocks */
    jQuery(".wp-block-hide-or-toggle-simple-blocks.slow .title").click(function () {
        jQuery(this).next(".wp-block-hide-or-toggle-simple-blocks .hidden").slideToggle("slow");
    });

    jQuery(".wp-block-hide-or-toggle-simple-blocks.fast .title").click(function () {
        jQuery(this).next(".wp-block-hide-or-toggle-simple-blocks .hidden").slideToggle("fast");
    });
 
});