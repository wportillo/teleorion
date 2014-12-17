<?php
			
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			$tpl->loadTemplatefile($page.'.html');
			
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
