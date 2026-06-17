<?php
$fixed = file_get_contents('index.html');
preg_match_all('/[\xC2-\xF4][\x80-\xBF]+/s', $fixed, $raw);
foreach (array_unique($raw[0]) as $chunk) {
    $converted = @iconv('UTF-8', 'Windows-1252//IGNORE', $chunk);
    if ($converted !== false && $converted !== '') {
        $fixed = str_replace($chunk, $converted, $fixed);
    }
}
preg_match_all('/>([^<>]*[\x{3040}-\x{30ff}\x{3400}-\x{9fff}][^<>]*)</u', $fixed, $matches);
$items = [];
foreach ($matches[1] as $text) {
    $text = trim(preg_replace('/\s+/u', ' ', html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8')));
    if ($text !== '') {
        $items[$text] = true;
    }
}
foreach (array_keys($items) as $text) {
    echo $text, PHP_EOL;
}
