## Fullstack with Javascript.

Configuring typescript to work with your node project.

```bash
yarm add  
```

configuring the **orm** packages.

```bash
yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
```

The first step would to initialize the **microarm database**.

```typescript
const main = async () => {
 const orm = await MikroORM.init({
   entities: [Post],
   dbName: 'lireddit',
   type: 'postgresql',
   debug: !__prod__,
   user: "root",
   password: "example"
 });

 const post = orm.em.create(Post, {title: 'my first post'});
 await orm.em.persistAndFlush(post);
 console.log('----------sql2------------');

 await orm.em.nativeInsert(Post, {title: "my firt post 2"}});


};

main();
````

the above code will not work yet. We need to configure microarm cli to **generate** migrations of our **entities**.

