# Change User Role

You can use Papagaio CLI to change a role for a user with the command below:

```
papagaio user change-role
      --gateway-url string   papagaio gateway URL(optional)
      --id uint              user id
      --role string          user role(ADMINISTRATOR, DEVELOPER)
      -h, --help   help for change-role
      --token string         token
example: papagaio user change-role --id {userId} --role ADMINISTRATOR --token {papagaioAdminToken}
```
