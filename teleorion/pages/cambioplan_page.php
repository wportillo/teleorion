<?php
			
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			if($Security->getfree()){
				$tpl->loadTemplatefile('compraplan.html');
			}else{
				$tpl->loadTemplatefile($page.'.html');
			}
			
			$data = $Security->getdata();
				
			$product_info = $Security->getproducts($data->product_info->key_product);
			
				
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
