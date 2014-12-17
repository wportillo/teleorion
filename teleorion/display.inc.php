<?php

/**
 * Display
 *
 * @author willy
 * @package tvmia
 */
	require_once ('main.inc.php');

	if($layout){
		
	
		$main_tpl = new HTML_Template_Sigma(TEMPLATES_PATH, TEMPLATES_CACHE_PATH);
		
		$main_tpl->loadTemplateFile('layout.html');
		
		$main_tpl->setVariable('base',BASE);
		
		$main_tpl->setVariable('page_title', $page_title);
		
		$main_tpl->setCurrentBlock('module_content');
			$main_tpl->setVariable('module_content', $module_content);
		$main_tpl->parse('module_content');

		$main_tpl->show();
				
	}else {
		
		$tpl->setVariable('base',BASE);
			
		echo $tpl->get();	
	}
					
	ob_flush();
	ob_end_clean();		
	
	if(DEBUG_LOAD){
		$time_end = microtime(true);
		$time = $time_end - $time_start;		
		echo '<br /><center><div class="load_stats">Script load:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Base Memory: ' . $base_memory . 'KB<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Memory: ' . round(memory_get_usage() / 1024) . " KB<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Memory Peak: " . round(memory_get_peak_usage() / 1024) . " KB<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time: " . round($time, 2) . " seconds</div></center>";
	}
	
?>