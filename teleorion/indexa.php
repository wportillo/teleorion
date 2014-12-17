<?php 
	
	require_once ('includes/rewrite.class.php');
	
	$rewrite = new rewrite();
	
	$rewrite->page_default='index_page.php';
	
	$rewrite->php_required();
?>