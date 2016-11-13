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

$username = $_GET["username"];

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

		echo json_encode(array(
			userExists => (boolean)$result,
			data => json_decode($result["Item"]["Store"]["S"], true)
		));
    //$storedData = json_decode($result["Item"]["Store"]["S"]);
		//$stats = $storedData["stats"];
		//echo $storedData->Game;
		// echo $result["Item"]["Store"]["S"];

} catch (DynamoDbException $e) {
    echo "Unable to get item:\n";
    echo $e->getMessage() . "\n";
}

?>
