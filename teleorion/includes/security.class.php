<?php
/**
 * Security Site
 * @author William
 * @package tvmia
 */
class Security extends Rewrite{

		public $member =array('programacion','actualizaremailycontrasena','actualizarmetodopago','realicepago','verdetallefacturacion','listadodispositivos','cambioplan','ingresar','vinculardispositivo','planescogido','micuenta','contactenoscuenta');
		
		/*
		 * Construct Security
		 */
		public function __construct(){
			
			$this->memberpages();
		}

		/**
		  * Get User Data
		  */
		 public function getdata(){
		 	
			$data = array(
		 				
		 			'object'  		=>'Memberactions',
		 			'method'	    =>'getdata',
		 			'lang'	 		=>'es',
					'dataname'   =>'customer_info,credit_info,device_info,date_info,product_info',
		 			'i_sess'		=>  session_id(),
		 	);
		 	
		 	$message =  json_decode(jsonconnect($data));
		 	
		 	if(isset($message->error)){

				return false;
			
			}else{

				return  $message;
			
			}
		 }
		 
		 /**
		  * Get User Data
		  */
		 public function getfree(){
		 
		 	$data = array(
		 		 	
		 			'object'  		=>'Memberactions',
		 			'method'	    =>'getdata',
		 			'lang'	 		=>'es',
		 			'dataname'   =>'product_info',
		 			'i_sess'		=>  session_id(),
		 	);
		 
		 	$message =  json_decode(jsonconnect($data));
		 
		 	if(isset($message->error)){
		 
		 		return false;
		 			
		 	}else{
		 
		 		if($message->product_info->key_product=='freeorion'){
		 			return  true;
		 		}
		 	}
		 }
		 
		 /**
		  * Get Products
		  */
		 public function getproducts($key_product){
		 
		 	$data = array(
		 			'object'  		    =>  'Memberactions',
		 			'method'	    	=>  'getproducts',
		 			'lang'	 			=>  'es',
		 			'key_product'  =>  $key_product,
		 			'i_sess'			=>  session_id(),
		 	);
		 	
		 	$message =  json_decode(jsonconnect($data));
		 
		 	if(isset($message->error)){
		 
		 		return false;
		 			
		 	}else{
		 
		 		return  $message;
		 	}
		 }
		 
		 
		 /**
		  *  Get payments
		  */
		 public function getpayments(){
		 
		 	$data = array(
		 		 	
		 			'object'  		=>'Memberactions',
		 			'method'	    =>'getdata',
		 			'lang'	 		=>'es',
		 			'dataname'   =>'payment_history',
		 			'i_sess'		=>  session_id(),
		 	);
		 
		 	$message =  json_decode(jsonconnect($data));
		 
		 	if(isset($message->error)){
	
					return false;
				
				}else{
	
					return  $message;
				
			}
		 }

		 /**
		  *  Get Devices
		  */
		 public function getdevices(){
		 		
		 	$data = array(
		 		 	
		 			'object'  		=>'Memberactions',
		 			'method'	    =>'getdata',
		 			'lang'	 		=>'es',
		 			'dataname'   	=>'device_info',
		 			'i_sess'		=> session_id(),
		 	);
		 		
		 	$message =  json_decode(jsonconnect($data));

		 	if(isset($message->error)){
		 	
		 		return false;
		 			
		 	}else{
		 	
		 		return  $message;
		 			
		 	}
		 	
		 }
		 /**
		  * User is Logged
		  *
		  * @return boolean
		  */
			 public function logged(){
			 	
			 	$user  =_session('i_customer',false);
			 	
			 	if($user){
			 		return true;
			 	}else{
			 		return false;
			 	}
			 }
			 
			 /**
			  * Control Member Pages
			  *
			  * @return boolean
			  */
			 public function memberpages(){
				
			 	if(!$this->logged()){
		
					if(search_in_array($this->member, $this->get_uri_position(1))){
						header('location:/login');
			 		}
			 	
				}else{
			 		
			 		if(!search_in_array($this->member, $this->get_uri_position(1))){
			 			header('location:/programacion');
			 		}
				}
			 }
}
?>