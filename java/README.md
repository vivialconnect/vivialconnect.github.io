# VivialConnect Client for Java

A simple Java library for using the [Vivial Connect REST API](https://www.vivialconnect.net/) to send and receiving text messages.

## Installation

### Maven Installation

Include the following dependency into your pom.xml:

```xml
<dependency>
  <groupId>net.vivialconnect</groupId>
  <artifactId>vivialconnect-java</artifactId>
  <version>[version-number]</version>
</dependency>
```

### Version History

- 0.1.7 _(latest)_
- 0.1.6
- 0.1.5
- 0.1.4
- 0.1.3
- 0.1.2
- 0.1.0

### Manual Installation

You can clone the VivialConnect Java client repository into your project:

```
git clone https://github.com/VivialConnect/vivialconnect-java
```

## Usage

### Initialize Client

Needed before attempting to use any resource.

```java
VivialConnectClient.init(123456, my-api-key, my-api-secret);
```

### Search for and buying a number

```java
List<AvailableNumber> availableNumbers = Number.findAvailableNumbersByAreaCode("302");
AvailableNumber availableNumber = availableNumbers.get(0);
AssociatedNumber associatedNumber = availableNumber.buy();
```

### Send a text message

```java
Message message = new Message();
message.setFromNumber("+19132597591");
message.setToNumber("+11234567890");
message.setBody("Hello, from Vivial Connect!");
message.send();
```

### Retrieve a list of all messages sent

```java
Message.getMessages();
```

### Get a specific message by ID

```java
Message message = Message.getMessageById(86962);
```

### Retrieve a list of the 5 most recent messages

```java
Map<String, String> queryParams = new HashMap<String, String>();
queryParams.put("order", "sent desc");
queryParams.put("limit", "5");
List<Message> messages = Message.getMessages(queryParams);
```

### Retrieve a 2 available numbers from US area code 302

```java
Map<String, String> queryParams = new HashMap<String, String>();
queryParams.put("limit", "2");
List<AvailableNumber> availableNumbers = Number.findAvailableNumbersByAreaCode("302", queryParams);
```

## Requirements

-   An active [Vivial Connect](https://www.vivialconnect.net/register/) account
-   [JDK 6 or latest](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

## Limitations

Currently, the Vivial Connect Java Library doesn’t support asynchronous requests.

## Useful Resources

-   [Vivial Connect REST API Documentation](https://docs.vivialconnect.net)
-   [Libraries for other languages](https://vivialconnect.github.io)
