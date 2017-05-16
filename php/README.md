<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vivial Connect PHP Library</title>
    <link rel="stylesheet" href="/css/github-markdown.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="/img/favicon.png'">
</head>
<body class="markdown-body">
    <header style="padding-left: 0px">
        <img src="/img/logo.png"><br>
    </header>

# Vivialconnect PHP Library

A simple PHP library for using the [Vivial Connect REST API](https://www.vivialconnect.net/) to send and receiving text messages. For a complete description of all features visit the [full API reference](https://vivialconnect.github.io/vivialconnect-php/).

Installation
------------

The installation of Composer is really simple:

```php
curl -s http://getcomposer.org/installer | php -- --install-dir=bin
```

Next, run the Composer command to install the latest stable version of VivialConnect PHP client:

```php
php composer.phar require vivialconnect/sdk
```

You can also manually add metadata into your local composer.json file, at the top level of the project:

```php
{
    "require": {
        "vivialconnect/sdk": "0.1"
    }
}
```

Run the composer install command:

```php
composer.phar install
```

In the last step you will include composer autogenerated autoload.php file into your project, and you are ready to go:


```php
require 'vendor/autoload.php';
```

You can then later update VivialConnect PHP client using composer:

```php
php composer.phar update
```


Usage
-----

### Getting Started 

Before using the Vivial Connect PHP library you will need to create a Vivial Connect account:

1. [Register](https://www.vivialconnect.net/register/) a new account 
2. Go to the accounts page, and get your account number, API key and API secret.

Next, initialize your PHP application with this information:


```php
require __DIR__ . '/vendor/autoload.php';

use VivialConnect\Resources\Resource;

Resource::setCredentialToken(Resource::API_KEY, "my-api-key");
Resource::setCredentialToken(Resource::API_SECRET, "my-api-secret");
Resource::setCredentialToken(Resource::API_ACCOUNT_ID, "12345678");
Resource::init();

```

### Purchase a Number

When purchasing a number, you must first find available numbers:

```php

use VivialConnect\Resources\Number;

function listAvailableNumbers($countryCode = 'US', $phoneNumberType = 'local',
                              $areaCode = '913', $page = 1, $limit = 20)
{
    $qs = ['page' => $page, 'limit' => $limit, 'area_code' => $areaCode];
    $numbers = Number::searchAvailable($countryCode, $phoneNumberType, $qs);
    foreach ($numbers as $key => $number)
    {
        printf("name = %s\n", $number->name);
        printf("phone_number = %s\n", $number->phone_number);
        printf("phone_number_type = %s\n", $number->phone_number_type);
        print("\n");
    }
}

listAvailableNumbers();
```

Then buy one:

```php
function buyNumber($name, $phoneNumber,
                   $areaCode, $phoneNumberType = 'local')
{
    $number = new Number;
    $number->name = $name;
    $number->phone_number = $phoneNumber;
    $number->area_code = $areaCode;
    $number->phone_number_type = $phoneNumberType;
    $number->buy();
}

buyNumber('(123) 259-7591', '+11232597591', '123');

```


### Send a Message

```php
use VivialConnect\Resources\Message;

function sendMessage($body, $fromNumber, $toNumber)
{
    $message = new Message;
    $message->body = $body;
    $message->from_number = $fromNumber;
    $message->to_number = $toNumber;
    $message->send();
}

sendMessage('Howdy, from Vivial Connect!',
            '+10982599999', '+11234561111');

```

### Get Message Status


```
TODO
```

Requirements
------------

* An active [Vivial Connect](https://www.vivialconnect.net/register/) account 
* Any flavour of PHP 5.3.3+
* Guzzle - PHP HTTP client
* Onion - standalone middleware library


Limitations
-----------

Currently, the Vivial Connect PHP Library doesn’t support asynchronous requests.

Useful Resources
----------------

* [Full PHP Library Documentation](https://vivialconnect.github.io/vivialconnect-php/)
* [Vivial Connect REST API Documentation](https://www.vivialconnect.net/docs/)
* [Libraries for other languages](https://vivialconnect.github.io/)

</body>