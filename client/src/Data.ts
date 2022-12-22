import { HeaderData } from './components/header/Header.interface';
import { EndpointData, Method } from './components/endpoint/Endpoint.interface';

export const headerData: HeaderData = {
  title: "File Metadata API",
  apiURL: "https://exercise-tracker-fcc.fly.dev/api",
  description: "This is a sample File Metadata Microservice server",
  sourceURL: "https://github.com/OlegAba/file-metadata-microservice"
}

export const endpointData: EndpointData = {
  name: 'fileanalyse',
  description: 'Returns a JSON object with the metadata of the uploaded file',
  methodsData: [
    {
      method: Method.POST,
      endpoint: '/api/fileanalyse',
      params: [
        {
          name: 'upfile',
          type: 'file',
          apiInterface: 'form-data',
          description: 'A non-empty file',
          sampleInput: '{ \n  "upfile": "Example.txt"\n}'
        }
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "name": "Example.txt",\n  "type": "text/plain",\n  "size": 7\n}\n'
        },
        {
          statusCode: 400,
          description: 'Invalid username provided',
          sampleRes: '{ \n  "error": "No upfile found"\n}'
        }
      ]
    }
  ]
}