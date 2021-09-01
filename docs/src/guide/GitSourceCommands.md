# Git Source commands

In order to login in Papagaio you have to add your Git Source using the command below.

```
Usage:
  papagaio gitsource [command]

Available Commands:
  add         
  remove      
  update      

Flags:
      --agola-client-id string       agola oauth2 client id
      --agola-client-secret string   agola oauth2 client secret
      --agola-remotesource string    agola remotesource name
      --delete-remotesource          true to delete the Agola remotesource
      --gateway-url string           papagaio gateway URL(optional)
      --git-api-url string           api url
      --git-client-id string         git oauth2 client id
      --git-client-secret string     git oauth2 client secret
  -h, --help                         help for gitsource
      --name string                  gitSource name
      --token string                 token
      --type string                  git type(gitea, github, gitlab)

Use "papagaio gitsource [command] --help" for more information about a command.
```
## Add a Git Source

To add a git source in papagaio using an existing Agola remote source:


```
papagaio gitsource add  --name {gitSourceName} 
                        --type gitea 
                        --git-api-url {gitUrl} 
                        --git-client-id {gitClientId} 
                        --git-client-secret {gitClientSecret} 
                        --agola-remotesource {agolaRemoteSource} 
                        --token {papagaioAdminToken}
```

## Update Git Source

To update a git source
```
papagaio gitsource update   --name {gitSourceName} 
                            --type gitea 
                            --git-api-url {gitUrl} 
                            --git-client-id {gitClientId} 
                            --git-client-secret {gitClientSecret} 
                            --agola-remotesource {agolaRemoteSource} 
                            --token {papagaioAdminToken}
```
## Remove Git Source

To remove a git source 

```
papagaio gitsource remove   --name {gitSourceName}
                            --token {papagaioAdminToken}
```
To remove a git source also in Agola
```
papagaio gitsource remove   --name {gitSourceName}
                            --delete-remotesource
                            --token {papagaioAdminToken}
```