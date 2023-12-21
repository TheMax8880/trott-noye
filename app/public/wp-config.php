<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'c<a]v~C9/090rFid1tt8Pa%vWqK3fEYnKKd-VfC&v[BJZ^z9Z|0B$Fmvr-1[pcvJ' );
define( 'SECURE_AUTH_KEY',   'hmzU[2!L.Z<ZkX_yMT!5=/|2OJ;I+dR[u6$ks|PBW<*-1.pr(rll?Nk(ND0m66Y,' );
define( 'LOGGED_IN_KEY',     'QW3La Ka[?gw*;UCBS#f>(Cz2hvlaLO9[g6xh!ftZKF7NjLTgm[L^z2=v9_{RGyp' );
define( 'NONCE_KEY',         '9rBIDG(R!UwKC<7Kzzg*}q{EnAzy~m~mtLYlXrZD7xc_-_I9BC*[7V4)eT<{L2]/' );
define( 'AUTH_SALT',         'Vq5C1N6-?mm+}aKe{@6LJM;WeB,Z5+_R[tM#XQ=mMC/EkA:}eC#VEUJS-GG!ybw&' );
define( 'SECURE_AUTH_SALT',  'u$<JlAPLo<4od}-I*KB/+V_+v:7:=_YEL)$w-2_3-h;k.gX!Q%f6bKP@kP=h35kn' );
define( 'LOGGED_IN_SALT',    '/t]=aaCKzt,MJ0u`xnBenX+~Ne@@?l:p?]{aK>]R9+!4cym)t2mSMK;ypDJDmuBy' );
define( 'NONCE_SALT',        'c0<Wew;;n$6H+V)F3FX~U#R>_Gq!f;~p*{n`O6GUNp95iOpw8TfA[:q.w;>9)4P2' );
define( 'WP_CACHE_KEY_SALT', 'gFD4z!Ld@|}yJh0xam_*/H!^8c<N_[BR}1G>awB`Es0.0)nF{Z!AFt;trFxV_Inb' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
