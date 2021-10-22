# MongoDB

- Is a Document Database
- It Stores Data as document/object

# SQL vs NoSQL

| SQL      | NoSQL      |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |

```
// Example Document
{
    "_id": ObjectId("5c8231a5c62f9e0004a02e60"),
    "name": "Alice",
    "Age": 22,
    "Gender": "Female"
}
```

# MongoDB CLI Tool

| Commands                  | Description                   |
| ------------------------- | ----------------------------- |
| ```use <database-name>``` | To switch current database    |
| ```show dbs```            | To list all the databases     |
| ```db```                  | Reference to current database |
| ```show collection```     | To list all the collection    |

# CRUD Operation

## Create / Insert

Insert Single Document
```
db.<collection-name>.insert({
    key: value
})
```

Insert Multiple Documents
```
db.<collection-name>.insert([
    {
        key: value1,
    },
    {
        key: value2,
    }
])
```

## Read

```
// Returns whole collection

db.<collection-name>.find()
```

```
// Formatted Output

db.<collection-name>.find().pretty() 
```

```
// Find Specific Documents

db.<collection-name>.find({ name: "test" })
```

## Query Documents

https://docs.mongodb.com/manual/tutorial/query-documents/

## Update

```
// Update Document with new fields

db.<collection-name>.update({ name: "test" }, { name: "new name" })  // Warning: This will remove all old fields.
```

```
// Set new fields
db.<collection-name>.update({ name: "test" }, { $set: { age: 10 } })
```

## Delete

```
// Remove All Documents

db.<collection-name>.remove()
```

```
// Remove Specific Document(s)

db.<collection-name>.remove({ name: "test" })
```
