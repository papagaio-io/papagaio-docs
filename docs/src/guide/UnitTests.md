# Unit Tests

go test wecode.sorint.it/opensource/papagaio-api/service -v

go test -coverprofile testCover.out wecode.sorint.it/opensource/papagaio-api/service
go tool cover -html testCover.out