<?php
/**
 * Main
 *
 * @author william
 * @package tvmia
 *
 */
	ob_start();
	
	$base_memory = round(memory_get_usage() / 1024);
	
	$time_start = microtime(true);
	
	/**
	 *  Error reporting
	 */
	error_reporting(E_ALL);
	
	ini_set('memory_limit','256M');
	
	/**
	 * Default Timezone
	 * 
	 */
    date_default_timezone_set('America/New_York');
	/**
	 * Base Path
	 */
	define('BASE_PATH', realpath(dirname(realpath(__FILE__))));
	/**
	 * Includes Path
	 */
	define('INCLUDE_PATH', BASE_PATH . '/includes/');

	/**
	 * SERVER NAME
	 */
	define('SERVER_NAME',$_SERVER['SERVER_NAME']);

	/**
	 * Lang Path
	 */
	define('LANG_PATH', INCLUDE_PATH. 'define_lang/');
	/**
	 * Encrypt Key
	 */
	define('ENCRYPT_KEY','jp3326001');
	/**
	 * Templates Path
	 */
	define('TEMPLATES_PATH', BASE_PATH . '/');
	/**
	 * Templates Cache Path
	 */
	define('TEMPLATES_CACHE_PATH', BASE_PATH . '/templates_cache/');

	/**
	 * Classes Path
	 */
	define('CLASSES_PATH', BASE_PATH. '/includes/classes/');
	/**
	 * Config
	 */
	require_once(INCLUDE_PATH . 'config.inc.php');
	/**
	 * General Functions
	 */
	require_once(INCLUDE_PATH . 'functions.inc.php');
	/**
	 * Sigma Templates
	 */
	require_once(INCLUDE_PATH . 'sigma.inc.php');
	/**
	 * DB Class
	 */
	require_once(INCLUDE_PATH . 'db.class.php');
	/**
	 * RS Class
	 */
	require_once(INCLUDE_PATH . 'rs.class.php');	
	/**
	 * Rs Extend Elements
	 */
	require_once(CLASSES_PATH . 'clase.php');
	/**
	 * Session
	 */
	require_once(INCLUDE_PATH . 'session.class.php');
	/**
	 * Security Class
	 */
	require_once(INCLUDE_PATH . 'security.class.php');
	
	/*
	 * Db Connection
	 * 
	 */
		if(DEBUG){
			ini_set('display_errors', true);
		}else {
			ini_set('display_errors', false);
			$old_error_handler = set_error_handler('userErrorHandler');	
		}	
	
	if(!db::connectdb()){
				
			die('Database server error');
	}
	
	/**
	 * Module Rewrite apache
	 */
		$rewrite		= new Rewrite();
		
		$rewrite->sslredirect();
	
	/**
	 * Session save Db
	 */
		if(SESSION){
                    
			$Sessions_Val = new SessionManager(false);
		}else{	
			session_start();
		}

		$Security = new Security();
			
?>