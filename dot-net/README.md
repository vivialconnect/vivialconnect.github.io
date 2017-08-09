# VivialConnect .NET Library

A simple .NET library for using the [Vivial Connect REST API](https://www.vivialconnect.net/) to send and receiving text messages. 

Installation
------------

You can add the VivialConnect library to your .NET project through the NuGet package manager. From within the Visual Studio IDE, use the NuGet GUI to search for and install the VivialConnect package.

Usage
-----

### Initialize Client 

This only needs to be done once but is needed before attempting to use any resource.
```csharp
using VivialConnect;

class Program
{
   static void Main(string[] args)
   {
       VcClient.Init(12345, "my-api-key", "my-api-secret");
...
```

### Updates your Account company name

```csharp
using VivialConnect;
using VivialConnect.Resources.Account;

class Program
{
   static void Main(string[] args)
   {
       VcClient.Init(12345, "my-api-key", "my-api-secret");
       
       Account account = Account.FindSingle();
       account.CompanyName = "My Updated Company Name";
       account.Save();
   }
}
```

### Search for and buy a number

```csharp
using VivialConnect;
using VivialConnect.Resources.Number;

class Program
{
   static void Main(string[] args)
   {
       VcClient.Init(12345, "my-api-key", "my-api-secret");
       
       List<NumberAvailable> numbersAvailable = Number.FindAvailable(inRegion: RegionEnum.CA);
       Number number = numbersAvailable[0].Buy();
   }
}
```

### Send text message

```csharp
using VivialConnect;
using VivialConnect.Resources.Message;

class Program
{
   static void Main(string[] args)
   {
       VcClient.Init(12345, "my-api-key", "my-api-secret");
       
       Message message = Message.Send("+13105551111", "+15309992222", body: "Hello, from Vivial Connect!");
   }
}
```

### Create a Connector

```csharp
using VivialConnect;
using VivialConnect.Resources.Connector;

class Program
{
   static void Main(string[] args)
   {
       VcClient.Init(12345, "my-api-key", "my-api-secret");
       
       Connector connector = new Connector();
       connector.Name = "My New Connector";
       connector.Callbacks.Add(new CallbackIncoming() { MessageType = MessageTypeEnum.Text, Url = "path/to/sms/callback1", Method = "POST" });
       connector.Numbers.Add(new ConnectorNumber("+15309992222"));
       connector.Save();
   }
}
```

Requirements
------------

* An active [Vivial Connect](https://www.vivialconnect.net/register/) account 

Limitations
-----------

Currently, the Vivial Connect .NET Library doesn’t support asynchronous requests.

Useful Resources
----------------

* [Vivial Connect REST API Documentation](https://www.vivialconnect.net/docs/)
* [Libraries for other languages](https://vivialconnect.github.io/)
