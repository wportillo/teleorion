<?php
/**
 * Db classes
 * @author william
 * @package core
 */
	class Sessions extends rs{
		function __construct(){
			$this->table ='sessions';
			$this->primary_key='i_session';
		}
	}
?>