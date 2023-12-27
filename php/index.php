<?php

spl_autoload_register(function ($class) {
	$fn=__DIR__."/classes/".str_replace("\\", "/",$class).".php";
	if (!file_exists($fn)) {
		throw new Exception("Kan $fn niet laden");
	}
	if (is_file($fn))
		require_once($fn);
});

header('Access-Control-Allow-Origin: *');
// require_once 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD']!='GET') {
	?>[{"id":1},{"id":2,"title":"test"}]<?php 
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

	<style>
		.circleize {
			font-size: 34px;
			color: lightgray;
		}

		.circleize svg text {
			fill: currentColor;
		}

		@keyframes spin {
			100% {
				transform: rotate(360deg);
			}
		}

		.circleize svg {
			animation: spin 20s linear infinite;
		}
	</style>

	<script defer="defer" src="/static/js/main.js"></script>
	<link href="/static/css/main.css" rel="stylesheet">
</head>

<body>
	<div class="circleize">Simple CMS&nbsp;</div>
	<div id="root"></div>
	<script src="circleize.js"></script>
</body>

</html>