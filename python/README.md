# VivialConnect Python Library

A simple python module for using the [Vivial Connect REST API](https://www.vivialconnect.net/) to send and receiving text messages. For a complete description of all features visit the [full API reference](https://vivialconnect.github.io/vivialconnect-python/).

## Installation

You can install vivialconnect via pip with:

    $ pip install vivialconnect

Alternatively, clone the repository and install locally:

    $ git clone https://github.com/VivialConnect/vivialconnect-python
    $ python setup.py install

## Usage

### Getting Started

Before using the Vivial Connect python library you will need to create a Vivial Connect account:

1. [Register](https://www.vivialconnect.net/register/) a new account
2. Go to the accounts page, and get your account number, API key and API secret.

Next, initialize your Python application with this information:

```python
from vivialconnect import Resource, Message

Resource.api_key = "my-api-key"
Resource.api_secret = "my-api-secret"
Resource.api_account_id = "123456"
```

### Purchase a Number

When purchasing a number, you must first find available numbers:

```python
available_numbers = Number.available(country_code='US',
                                      area_code='646',
                                      limit=5)
```

Then buy one:

```python
if available_numbers:
    my_number = available_numbers[0]
    my_number.name = "A Friendly Name"
    my_number.buy()
```

### Send a Message

```python
message = Message()
message.from_number = my_number.phone_number
message.to_number = "+12125551212"
message.body = "Hello Friend!"
message.send()
```

### Get Message Status

```python
message = Message.find(message.id)
print(message.id, message.status)
```

## Requirements

-   Python 2.7 or above
-   An active [Vivial Connect](https://www.vivialconnect.net/register/) account

## Limitations

Currently, the Vivial Connect Python Library doesn’t support asynchronous requests.

## Useful Resources

-   [Full Python Library Documentation](https://vivialconnect.github.io/vivialconnect-python/)
-   [Vivial Connect REST API Documentation](https://vivialconnect.net/docs)
-   [Libraries for other languages](https://vivialconnect.github.io)
