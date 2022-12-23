# File Metadata Microservice
[Live Server Example](https://file-metadata-microservice.fly.dev/)

## Installation
We use [NPM](https://www.npmjs.com/get-npm) for our dependency manager. This should be installed before continuing.

To access the project, run the following:
```
git clone --recursive https://github.com/OlegAba/file-metadata-microservice.git
cd file-metadata-microservice
npm run install-all
```

## Docker
Build and run the container locally
```
docker build . -t file-metadata-microservice
docker run -dp 8080:8080 file-metadata-microservice
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/OlegAba/file-metadata-microservice/blob/main/LICENSE) file for details.