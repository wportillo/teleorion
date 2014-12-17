<?php

                        $layout                   = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title		  = 'Inicio';

			/**
			 * Load template
			 */
			if($page ==''){
			
				$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
				$tpl->loadTemplatefile('index.html');
					
			}else{
			
				$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
					
				if($rewrite->getFileexist(TEMPLATES_PATH.$page.'.html')){
						
					$tpl->loadTemplatefile($page.'.html');
			
				}else{
			
					$tpl->loadTemplatefile('index.html');
				}
			}
				
				
			
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
