// import * as AWS from 'aws-sdk'

// const configuration = {
//     secretAccessKey: '',
//     accessKeyId: '',
//     region: ''
// }

// AWS.config.update(configuration)
// const docClient = new AWS.DynamoDB.DocumentClient();
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// const url = "https://vf7wncfcv8.execute-api.ap-northeast-1.amazonaws.com/prod";

export const fetchData = (tableName) => {    
  fetch(`https://3uskrwhsi7.execute-api.us-east-1.amazonaws.com/prod/ui-to-db?table=${tableName}`, {mode: 'no-cors'})
  .then((res) => console.log(res))
  .catch((err)=>{
    console.log(err)
  })
  // axios.get(`https://3uskrwhsi7.execute-api.us-east-1.amazonaws.com/prod/ui-to-db?table=${tableName}`)

    
  // var params = {
    //     TableName: tableName
    // }
    // const scanResults = [];
    // var items;
    // do {
    //     items = await docClient.scan(params).promise();
    //     items.Items.forEach((item) => scanResults.push(item));
    //     params.ExclusiveStartKey = items.LastEvaluatedKey;
    // } while (typeof items.LastEvaluatedKey !== "undefined");    
    // return scanResults;

}
