const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = '411631236';
const collectionName = 'studentslist';

(async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const students = await collection.find().toArray();

        console.log("學生列表：");
        students.forEach((student) => {
            console.log(student);
        });

        const departmentCounts = await collection.aggregate([
            {
                $group: {
                    _id: "$院系", // 根據 department 欄位分組
                    count: { $sum: 1 } // 計算每個分組的數量
                }
            }
        ]).toArray();

        console.log("各科系人數統計：");
        departmentCounts.forEach((dept) => {
            console.log(`科系: ${dept._id}, 人數: ${dept.count}`);
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        await client.close();
        console.log("已關閉連接");
    }
})();