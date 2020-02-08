# node-red-contrib-query-json-with-sql

This node allows the user to use SQL to query a JSON payload stream on the
fly, it uses the alasql library.

<p>
An example is:

select  * from ? where movie = "Midway"

Use this flow 
<code>
[{"id":"e8be5f3d.48979","type":"tab","label":"Movies","disabled":false,"info":""},{"id":"28980b0b.5b51b4","type":"inject","z":"e8be5f3d.48979","name":"","topic":"","payload":"[{\"movie\":\"Midway\",\"rating\":\"good\"},{\"movie\":\"Patton\",\"rating\":\"alright\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":270,"y":160,"wires":[["9ecec296.6b7088"]]},{"id":"9ecec296.6b7088","type":"jsonsql","z":"e8be5f3d.48979","name":"","property":"payload","propertyType":"msg","rules":[{"v":"select * from ? where movie like \"Mid%\"","vt":"str"},{"v":"select * from ? where not movie like \"Mid%\"","vt":"str"},{"v":"select * from ?","vt":"str"}],"checkall":"true","repair":false,"outputs":3,"x":440,"y":160,"wires":[["2b63f5d3.5183fa"],["37c96dae.931852"],["2c48bcb5.8735c4"]]},{"id":"2b63f5d3.5183fa","type":"debug","z":"e8be5f3d.48979","name":"Midway","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","x":660,"y":120,"wires":[]},{"id":"37c96dae.931852","type":"debug","z":"e8be5f3d.48979","name":"Patton","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","x":650,"y":160,"wires":[]},{"id":"2c48bcb5.8735c4","type":"debug","z":"e8be5f3d.48979","name":"All","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","x":650,"y":200,"wires":[]}]
</code>

