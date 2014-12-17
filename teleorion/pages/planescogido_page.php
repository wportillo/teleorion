<?php
			
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			$product		    = _get('product');
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			$tpl->loadTemplatefile($page.'.html');
			
			$product_info = $Security->getproducts($product);
				
			$html = "{$product_info->name_product} $ {$product_info->subscription} <br/>{$product_info->description_product_es} ";
				
			$tpl->setVariable('plan',$html);
			
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
