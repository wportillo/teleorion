	<?php
			
			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);

			if($Security->getfree()){
				$tpl->loadTemplatefile($page.'free.html');
			}else{
				$tpl->loadTemplatefile($page.'.html');
			}
			
			//$tpl->setv
			
			$data = $Security->getdata();
			
			$tpl->setVariable('email',$data->customer_info->email);
			
			
			if($data->customer_info->payment_method=='credit' ){

				$tpl->setVariable('credit_type',$data->credit_info->type);
			
			}else{
				
				$tpl->setVariable('credit_type','Paypal');
			
			}

			$product_info = $Security->getproducts($data->product_info->key_product);
			
			$html = "{$product_info->name_product} $ {$product_info->subscription} <br/>{$product_info->description_product_es} ";
			
			
			$tpl->setVariable('name',ucfirst($data->customer_info->name));
			
			$tpl->setVariable('product',$html);

			
			/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
