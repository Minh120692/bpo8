<?php
$s = 'ã‚³ãƒ¼ãƒ«ãƒ­ã‚°';
echo iconv('UTF-8', 'Windows-1252//IGNORE', $s), PHP_EOL;
