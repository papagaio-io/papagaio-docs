# Adding a Git Source

To add a git source in papagaio use the command below:

```
papagaio gitsource add  
      --agola-client-id string       agola oauth2 client id
      --agola-client-secret string   agola oauth2 client secret
      --agola-remotesource string    agola remotesource name
      --gateway-url string           papagaio gateway URL(optional)
      --git-api-url string           api url
      --git-client-id string         git oauth2 client id
      --git-client-secret string     git oauth2 client secret
  -h, --help                         help for gitsource
      --name string                  gitSource name
      --token string                 token
      --type string                  git type(gitea, github, gitlab)
      --delete-remotesource          true to delete the Agola remotesource(default false)
```

example: 
```
papagaio gitsource add --name {gitSourceName} --type gitea --git-token {gitUserToken} --git-api-url  {gitUrl --agola-remotesource {agolaRemoteSource} --agola-token {agolaUserToken} --token {papagaioAdminToken}
```