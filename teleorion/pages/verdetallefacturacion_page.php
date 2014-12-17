<?php

			$layout           = false;
			
			$page	  		  = $rewrite->get_uri_position(1);
			
			$page_title	   = 'Inicio';
			
			/**
			 * Load template
			 */
			$tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
			
			$tpl->loadTemplatefile($page.'.html');
			
			
			$userdata = $Security->getdata();
			
			$data = $Security->getpayments();
			
			
			foreach ($data->payment_history as $history){
					$tpl->setCurrentBlock('history');
						$tpl->setVariable('trans_date',mysql_date_to_spanish($history->transdate));
						$tpl->setVariable('authcode',$history->authcode);
						$tpl->setVariable('amount',$history->amount);
						$tpl->setVariable('type',$history->type);
					$tpl->parse('history');
			}
			
			$product_info = $Security->getproducts($userdata->product_info->key_product);
				
		    $tpl->setVariable('amount','$'.$product_info->subscription);
			
		    $tpl->setVariable('date',mysql_date_to_spanish($userdata->date_info->next_payment));

    		/*
			 * Display File
			*/
			
			require_once('display.inc.php');
?>
