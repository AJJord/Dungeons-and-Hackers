<?php
require 'vendor/autoload.php';

date_default_timezone_set('UTC');

use Aws\DynamoDb\Exception\DynamoDbException;
use Aws\DynamoDb\Marshaler;

$sdk = new Aws\Sdk([
    'region'   => 'eu-west-1',
    'version'  => 'latest',
		'credentials' => [
        'key'    => 'AKIAIJT2IKOY2U3IDR5A',
        'secret' => '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',
    ],
]);

$dynamodb = $sdk->createDynamoDb();
$marshaler = new Marshaler();

$tableName = 'UserData';

$username = 'player1';

$key = $marshaler->marshalJson('
    {
        "username": "' . $username . '"
    }
');

$params = [
    'TableName' => $tableName,
    'Key' => $key
];

try {
    $result = $dynamodb->getItem($params);
    $storedData = json_decode($result["Item"]["Store"]["S"]);
		$stats = $storedData["stats"];
		print_r($stats);

} catch (DynamoDbException $e) {
    echo "Unable to get item:\n";
    echo $e->getMessage() . "\n";
}

?>
