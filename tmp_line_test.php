<?php
$lines = file('index.html');
$s = $lines[69] ?? '';
echo iconv('UTF-8', 'Windows-1252//IGNORE', $s), PHP_EOL;
