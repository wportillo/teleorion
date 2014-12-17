<?php
			
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			$tpl->loadTemplatefile($page.'.html');
		
		
			$data = $Security->getdevices();
				
				
		
			foreach ($data->device_info as $device){
				$tpl->setCurrentBlock('device');
				 	$tpl->setVariable('i_serial',$device->i_serial);
				 	$tpl->setVariable('type',$device->type);
				$tpl->parse('device');
			}
		
			
			
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
