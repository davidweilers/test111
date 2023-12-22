<?php

spl_autoload_register(function ($class) {
	$fn=__DIR__."/classes/".str_replace("\\", "/",$class).".php";
	if (!file_exists($fn)) {
		throw new Exception("Kan $fn niet laden");
	}
	if (is_file($fn))
		require_once($fn);
});

// require_once 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD']!='GET') {
	exit;
}

ob_start();

$html=ob_get_clean();

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<script defer="defer" src="/static/js/main.d7b9aa3c.js"></script>
	<link href="/static/css/main.1103077d.css" rel="stylesheet">
</head>

<body>
	<div id="root"></div>
</body>

</html>