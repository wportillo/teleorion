<?php
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			$tpl->loadTemplatefile($page.'.html');
			
			$data = $Security->getdata();
			
			$product_info = $Security->getproducts($data->product_info->key_product);
				
			$tpl->setVariable('plan',$product_info->name_product.' '.$product_info->description_product_es);
			
			$tpl->setVariable('date',mysql_date_to_spanish($data->date_info->next_payment));
			
			$tpl->setVariable('amount',$product_info->subscription);
			
		
			
		    /*
			 * Display File
			*/
			require_once('display.inc.php');
?>
