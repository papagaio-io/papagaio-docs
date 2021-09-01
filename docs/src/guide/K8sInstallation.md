# Kubernetes Installation

This page will guide you to deploy Papagaio on Kubernetes environment using this examples.

## Example of pv.yml

```
kind: PersistentVolume
apiVersion: v1
metadata:
  name: pv-papagaio-dev
  namespace: ci-dev
spec:
  storageClassName: nfs
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  nfs:
    server: 10.100.132.33
    path: /zdata/papagaio-dev
```

## Example of claim.yml

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: claim-papagaio-dev
  namespace: ci-dev
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: nfs
  resources:
    requests:
      storage: 10Gi
  volumeName: "pv-papagaio-dev"
```

## Example of deployment.yml

```
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: papagaio
  name: papagaio
  namespace: ci-dev
spec:
  replicas: 1
  selector:
    matchLabels:
      app: papagaio
  template:
    metadata:
      labels:
        app: papagaio
    spec:
      containers:
        - image: hub.docker.com/tulliobotti/papagaio:latest
          imagePullPolicy: Always
          name: papagaio
          ports:
            - containerPort: 8000
              protocol: TCP
          volumeMounts:
            - name: papagaio-conf
              mountPath: /bin/config.json
              subPath: config
            - name: papagaio-persistent-storage
              mountPath: /mnt/papagaio-data       
          livenessProbe:
            httpGet:
              path: /ping
              port: 8000
            initialDelaySeconds: 5
            periodSeconds: 5
      restartPolicy: Always
      volumes:
        - name: papagaio-conf
          secret:
            secretName: papagaio-secret
            items:
              - key: config.json
                path: config
        - name: papagaio-persistent-storage
          persistentVolumeClaim:
            claimName: claim-papagaio-dev
```
## Example of ingress.yml

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: papagaio
  namespace: ci-dev
spec:
  rules:
    - host: papagaio.yourdomain.it
      http:
        paths:
          - path: /
            backend:
              serviceName: papagaio
              servicePort: 8000
```
## Example of service.yml

```
apiVersion: v1
kind: Service
metadata:
  name: papagaio
  namespace: ci-dev
  labels:
    app: papagaio
spec:
  ports:
    - port: 8000
      name: papagaio
      protocol: TCP
      targetPort: 8000
  selector:
    app: papagaio
  type: ClusterIP
```

## Example of secret.yml

```
apiVersion: v1
kind: Secret
metadata:
  name: papagaio-secret
  namespace: ci-dev
stringData:
  config.json: |
    {
      "Server": {
        "Port": "8000",
        "LocalHostAddress": "https://papagaio.yourdomain.it",
        "ApiExposedURL": "https://papagaio.yourdomain.it/api"
      },
      "Database": {
        "DbPath" : "/mnt/papagaio-data/badger",
        "DbName": "papagaio-api"
      },
      "Agola": {
        "AgolaAddr": "https://agola.yourdomain.it",
        "AdminToken": "token admintoken"
      },
      "CmdConfig": {
       "DefaultGatewayURL": "http://localhost:8000"
      },
      "AdminToken": "token",
      "TokenSigning": {
        "Method": "hmac",
        "Key": "supersecretsigningkey",
        "Duration": 3600
      },
      "LogHttpRequest": true,
      "TriggersConfig": {
        "OrganizationsDefaultTriggerTime": 5,
        "RunFailedDefaultTriggerTime": 5,
        "UsersDefaultTriggerTime": 1440,
        "StartOrganizationsTrigger": true,
        "StartRunFailedTrigger": true,
        "StartUsersTrigger": true
      },
      "Email": {
        "SMTPServer": "mail.yourserver.it",
        "SMTPPort": 25,
        "Username": "mailuser",
        "Password": "mailpass",
        "From": "Papagaio <no-reply@yourdomain.it>",
        "Encryption": "NONE"
      }
    }

```