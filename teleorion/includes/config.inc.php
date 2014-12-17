<?php
/**
 * Configuration File
 *
 * @author william
 * @package Core
 */

if(SERVER_NAME=='teleorion'){
		/**
		 * Site Debug (PHP Errors)
		 */
		define('DEBUG', true);
		
		/**
		 * Database Debug (SQL)
		 */
		define('DEBUG_DB', false);
		
		/**
		 * Show Load (Memory & Time)
		 */
		define('DEBUG_LOAD', false);
		/**
		 * MySQL Host
		 */
		define('DB_HOST', 'sql.teleorion.com');
		
		/**
		 * MySQL Username
		 */
		define('DB_USER', 'teleorion');
	
		/**
		 * MySQL Password
		 */
		define('DB_PASS', 'jp3326042');
		
		/**
		 * MySQL Database
		 */
		define('DB_NAME', 'jsonteleorion');
		/**
		 * BASE NAME
		 */
		define('BASE','http://'.SERVER_NAME.'/');
		/**
		 * BASE IMG
		 */
		define('BASE_IMG','tvmia');
		/**
		 * Save Session Db 
		 */
		define('SESSION',true);
		/**
		 * Session Name Cookie
		 */
		define ('SESSION_NAME','teleorion');
		
		/**
		 * SSL redirection
		 */
		 define ('SSL',false);
		
		/**
		 * Define Cookie Name
		 */
		ini_set('session.name',SESSION_NAME);
		
		/**
		 * JSON HOST
		 */
		define ('JSON_HOST','json.teleorion.com');
		 
	}else{
		/**
		 * Site Debug (PHP Errors)
		 */
		define('DEBUG', false);
		
		/**
		 * Database Debug (SQL)
		 */
		define('DEBUG_DB', false);
		
		/**
		 * Show Load (Memory & Time)
		 */
		define('DEBUG_LOAD', false);
		/**
		 * MySQL Host
		 */
		define('DB_HOST', 'sql.teleorion.com');
		
		/**
		 * MySQL Username
		 */
		define('DB_USER', 'teleorion');
	
		/**
		 * MySQL Password
		 */
		define('DB_PASS', 'jp3326042');
		
		/**
		 * MySQL Database
		 */
		define('DB_NAME', 'jsonteleorion');
		 
		if($_SERVER['SERVER_PORT']=='443'){
				
					/**
                     * BASE NAME
                     */
                    define('BASE','https://'.SERVER_NAME.'/');
		}else{
                    /**
                     * BASE NAME
                     */
                    define('BASE','http://'.SERVER_NAME.'/');
         }

         /**
          * BASE IMG
          */
         define('BASE_IMG','tvmia');
         /**
          * Session Name Cookie
          */
         define ('SESSION_NAME','teleorion');
		/**
          * SSL redirection
          */
         define ('SSL',false);

         /**
          * Define Cookie Name
          */
         ini_set('session.name',SESSION_NAME);
         /**
          * Define Cookie Domain
          */
         ini_set('session.cookie_domain','.teleorion.com');
        /**
		 * Save Session Db
		 */
		define('SESSION',true);
		
		/**
		 * JSON HOST
		 */
		define ('JSON_HOST','json.teleorion.com');
	}
?>