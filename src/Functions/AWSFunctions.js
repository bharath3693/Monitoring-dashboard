// import * as AWS from 'aws-sdk'

// const configuration = {
//     secretAccessKey: '',
//     accessKeyId: '',
//     region: ''
// }

// AWS.config.update(configuration)
// const docClient = new AWS.DynamoDB.DocumentClient();


export const fetchData = (tableName) => {  
  
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
