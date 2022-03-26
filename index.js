// const redis = require("redis");
import redis from "redis";
const port = 5000;
const host = "127.0.0.1";

const client = redis.createClient();
client.connect();
client.on("connect", function() {
    console.log("Connected!");
});
//! dddd

async function runn() {
    const commonKey = "mykey";

    await client.set(commonKey, "Hello world");
    console.log(await client.get(commonKey));

    await client.append(commonKey, " and this is a very cool day");

    console.log(await client.get(commonKey));
    console.log(await client.getRange(commonKey, 0, 5));
}
runn();

// console.log(client);
client.set("framework", "ReactJS");
// console.log(client.get("framework"));