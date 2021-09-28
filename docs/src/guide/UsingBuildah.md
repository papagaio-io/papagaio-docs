# Using Buildah

In case you decide to use Buildah to build your docker images instead of Kaniko, some parameters has to be added as follows:

* In Agola inside configmaps.yml, under executor: add `allowPrivilegedContainers: true`

* In Papagaio inside config.yml, under containers: image: add `privileged: true` 