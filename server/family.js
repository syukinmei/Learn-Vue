const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('有人请求了family这个服务器');
    // console.log('请求的资源是:', request.url);
    // console.log('请求来自于:',request.get('Host'));
    next();
})

app.get('/family', (request, response) => {
    const familys = [
        { id: '001', name: 'syukinmei', age: 23, sex: '男' },
        { id: '002', name: 'ebiebi', age: 18, sex: '女' },
    ]
    response.send(familys);
})

app.listen(5001, (err) => {
    if (!err) console.log("family这个服务器启动成功，请求家庭成员信息地址为:http://localhost:5001");
})
