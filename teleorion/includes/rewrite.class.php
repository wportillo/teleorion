<?php
/**
 * Apache Mod Rewrite
 * @author William
 * @package tvmia
 */
class Rewrite{

	/**
	 * Default foler of php
	 */
	public $path='/pages/';
	
	public $page_default;
	
	public $ssl =array('cuenta', 'detalles-pago','modifica-pago','modificar-info','vinculartvmiabox','cambiar-password','registrate');
	
	/**
	 * Get Uri Path
	 *
	 * @return string
	 */
	public function get_uri_path(){
		return $_SERVER['REQUEST_URI'];
	}
	
	/**
	 * Get direction from Files Path VirutalHost
	 *
	 * @return string
	 */
	private function get_server_files_path(){
		return $_SERVER['DOCUMENT_ROOT'].$this->path;
	}
	
	/**
	 * Get file exist
	 */
	function getFileexist($filename){
		if (!($fh = @fopen($filename, 'rb'))) {
			return false;
		}else{
			return true;
		}
	}
	/**
	 * Get PHP pages from VirutalHost
	 *
	 * @return array $pages
	 */
	public function get_php_pages(){
			
		$pages		= scandir($this->get_server_files_path());

		$page_name;
		
		foreach($pages as $key=>$value){
			
			if(!preg_match('/^.*\_*.php$/', $value)){
				unset($pages[$key]);
			}
		}
		return $pages;
	}
	/**
	 * Get PHP filename
	 * 
	 * 
	 * @return array $page,$permissions
	 */
	public function get_php_filename(){
			
			$pages=false;
			
			$php_pages = $this->get_php_pages();

			$prefix	   = '_page.php';
			
			$page_key=array_search($this->get_uri_position().$prefix,$php_pages);

			if($page_key!=null){

				return array('page'=>$php_pages[$page_key]); 
			
			}else{
				return array('page'=>$this->page_default);
			}
		}
	
	/**
	 * Autoinclude pages from URI direction
	 *
	 * @param string $page_default
	 *
	 * @return string $page
	 */
	public function php_required(){
		
		   $pages = $this->get_php_filename();
		   
		   require_once ('main.inc.php');
		    
	       require_once($this->get_server_files_path().$pages['page']);
		}
	
	/**
	 * Get Uri Position
	 *
	 * @param ingener $position
	 * @param string  $default value
	 * @param boolean $strtolower true
	 * 
	 * @return string position value
	 */
	public function get_uri_position($position='1',$default='',$strtolower=true){
		
		$uri_val = explode('/',strip_tags($this->get_uri_path()));

		if(isset($uri_val[$position])){
			if($strtolower==true){
				return strtolower($uri_val[$position]);
			}else{
				return $uri_val[$position];
			}
		}else{
			if($strtolower==true){
				return strtolower($default);
			}else{
				return $default;
			}
		}
	}
	
	/**
	 * Link Friendly
	 *
	 * @params string $string
	 *
	 * @return mixed uriencode
	 *
	 */
	public function link_friendly($string){
		$special_characters = array('á','é','í','ó','ú','ñ','Á','É','Í','Ó','Ú','Ñ','/','?','¿','+',':');
			
		$single_characters = array('a_','e_','i_','o_','u_','n_','A_','E_','I_','O_','U_','N_','b_','g_','h_','plus_','zp');
			
		$result=str_replace('-',' ',$string);
			
		return	str_replace($special_characters,$single_characters,$result);
	}
	
	/**
	 * Unlink Friendly
	 *
	 * @params string $string
	 * @return mixed uridecode
	 *
	 */
	
	public function unlink_friendly($string){
	
		$single_characters = array('a_','e_','i_','o_','u_','n_','A_','E_','I_','O_','U_','N_','b_','g_','h_', 'plus_','zp');
	
		$special_characters= array('á','é','í','ó','ú','ñ','Á','É','Í','Ó','Ú','Ñ','/','?','¿', '+',':');
	
		$result=str_replace('-',' ',$string);
	
		return	str_replace($single_characters,$special_characters,$result);
	}
	
	/*
	 * ssl redirect
	*
	* @param
	*/
	public function sslredirect(){
	
		if(SSL==true){
	
			$uri  = search_in_array($this->ssl, $this->get_uri_position(1));
	
			switch($uri){
				case false:
					if($_SERVER['SERVER_PORT']==443){
						header('location:http://'.SERVER_NAME.$_SERVER['REQUEST_URI']);
					}
					break;
				default:
					if($_SERVER['SERVER_PORT']==80){
						header('location:https://'.SERVER_NAME.$_SERVER['REQUEST_URI']);
					}
					break;
			}
		}
	}
}
?>