<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
title: Vivial Connect Ruby Library
    <link rel="stylesheet" href="/css/github-markdown.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="/img/favicon.png'">
</head>
<body class="markdown-body">
    <header style="padding-left: 0px">
        <img src="/img/logo.png"><br>
    </header>

# Vivialconnect Ruby Library

A simple ruby gem for using the [Vivial Connect REST API](https://www.vivialconnect.net/) to send and receiving text messages. For a complete description of all features visit the [full API reference](https://vivialconnect.github.io/vivialconnect-ruby/).

Installation
------------

Add this line to your application's Gemfile:

```ruby
gem 'vivialconnect'
```

Then execute:

    $ bundle 

Alternatively, install the gem locally:

    $ gem install vivialconnect


Usage
-----

### Getting Started 

Before using the Vivial Connect Ruby library you will need to create a Vivial Connect account:

1. [Register](https://www.vivialconnect.net/register/) a new account 
2. Go to the accounts page, and get your account number, API key and API secret.

Next, initialize your Ruby application with this information:


```ruby
require 'vivialconnect'

VivialConnect::Client.configure(API_KEY, API_SECRET, ACCOUNT_ID)
```

### Purchase a Number

When purchasing a number, you must first find available numbers:

```ruby
available_numbers = VivialConnect::Number.available_numbers(area_code: "646",
                                                            limit: 5)
```

Then buy one:

```ruby
my_number = available_numbers.first
my_number = VivialConnect::Number.buy(phone_number: my_number.phone_number)
```


### Send a Message

```ruby
message = VivialConnect::Message.send(to_number: "+1612XXXXXXX",
                            from_number: my_number.phone_number,
                            body: "Hello World!")

message_id = message.id
```

### Get Message Status


```ruby
message = VivialConnect::Message.find(message_id)
puts(message.status)
```


Requirements
------------

* Ruby 2.0 or above
* An active [Vivial Connect](https://www.vivialconnect.net/register/) account 

Limitations
-----------

Currently, the Vivial Connect Ruby Library doesn’t support asynchronous requests.

Useful Resources
----------------

* [Full Ruby Library Documentation](https://vivialconnect.github.io/vivialconnect-ruby/)
* [Vivial Connect REST API Documentation](https://www.vivialconnect.net/docs/)
* [Libraries for other languages](https://vivialconnect.github.io/)

</body>