# Dashboard

The Dashboard allows you to have a quick overview about the "health" or status of your projects and repositories.

There is also a link to send you directly to your project in Agola.

![Dashboard](/images/dashboard.png "Dashboard")

## Deleting an Organization

This operation is allowed only for administrators. You can choose to delete the Organization only from Papagaio or from Papagaio and Agola. 

To become an administrator, use Papagaio CLI and issue the command below:

```
go run main.go user change-role --role ADMINISTRATOR --gateway-url https://yourgateway --token token --id 5
```