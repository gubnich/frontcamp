### Task 3
---
*1. How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?*

##### Query:

`db.restaurants.find({"borough": "Queens", "cuisine": "Chinese"}).count()`

##### Result:

`728`

---
*2. What is the _id of the restaurant which has the grade with the highest ever score?*

##### Query:

`db.restaurants.find({},{restaurant_id: 1, _id: 0}).sort({score: -1}).limit(1)`

##### Result:

`{ "restaurant_id" : "40356442" }`

---
*3. Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).*

##### Query:

`db.restaurants.updateMany({ borough: 'Manhattan' },{ $push: { grades: { grade: "A", score: 7, date: ISODate() }}})`

##### Result:

`{ "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }`

---
*4. What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.*

##### Query:

`db.restaurants.find({ 'grades.8.score': { $lt: 7 }}, { _id: 0, name: 1 })`

##### Result:

`{ "name" : "Silver Krust West Indian Restaurant" }
{ "name" : "Pure Food" }`

---
*5. What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.*

##### Query:

`db.restaurants.find({cuisine: 'Seafood', grades:{$elemMatch: { date: { $gte: ISODate("2014-02-01"), $lt: ISODate("2014-03-01") }, grade: 'B' }}}, { _id: 0, borough: 1, restaurant_id: 1 })`

##### Result:

`{ "borough" : "Bronx", "restaurant_id" : "41587617" }
{ "borough" : "Manhattan", "restaurant_id" : "41611969" }`

---
### Task 4
---

*1. Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the index is indeed used by the winning plan: db.restaurants.find({ name: "Glorious Food" })*

##### Query:

`db.restaurants.createIndex({ name: 1 })`

##### Result:

`> db.restaurants.find({ name: "Glorious Food" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "name" : {
                                "$eq" : "Glorious Food"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 1,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Glorious Food\", \"Glorious Food\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "user-��",
                "port" : 27017,
                "version" : "3.2.22",
                "gitVersion" : "105acca0d443f9a47c1a5bd608fd7133840a58dd"
        },
        "ok" : 1
}`

---
*2. Drop index from task 4.1*

##### Query: 

`db.restaurants.dropIndex('name_1')`

---
*3. Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is indeed covered: db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 })*

##### Query:

`db.restaurants.createIndex({ restaurant_id: 1, borough: 1 })`

##### Result:

`> db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "restaurant_id" : {
                                "$eq" : "41098650"
                        }
                },
                "queryHash" : "11B8AFCC",
                "planCacheKey" : "A2837C36",
                "winningPlan" : {
                        "stage" : "PROJECTION_COVERED",
                        "transformBy" : {
                                "_id" : 0,
                                "borough" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "restaurant_id" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "restaurant_id_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "restaurant_id" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "restaurant_id" : [
                                                "[\"41098650\", \"41098650\"]"
                                        ],
                                        "borough" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "EPBYMINW8923",
                "port" : 27017,
                "version" : "4.2.1",
                "gitVersion" : "edf6d45851c0b9ee15548f0f847df141764a317e"
        },
        "ok" : 1
}`

---
*4. Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten Island”:*

##### Query:

`db.restaurants.createIndex({ cuisine: 1, borough: 1 }, { partialFilterExpression: { borough: 'Staten Island'} } )`

##### Result:

`db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                {
                                        "cuisine" : {
                                                "$eq" : "American"
                                        }
                                }
                        ]
                },
                "queryHash" : "DBDC0200",
                "planCacheKey" : "77ECB1E7",
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "cuisine" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "cuisine_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "cuisine" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : true,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "cuisine" : [
                                                "[\"American\", \"American\"]"
                                        ],
                                        "borough" : [
                                                "[\"Staten Island\", \"Staten Island\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "EPBYMINW8923",
                "port" : 27017,
                "version" : "4.2.1",
                "gitVersion" : "edf6d45851c0b9ee15548f0f847df141764a317e"
        },
        "ok" : 1
}`

`> db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                {
                                        "name" : {
                                                "$eq" : "Bagel Land"
                                        }
                                }
                        ]
                },
                "queryHash" : "D9E6DF40",
                "planCacheKey" : "54301B90",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$and" : [
                                        {
                                                "borough" : {
                                                        "$eq" : "Staten Island"
                                                }
                                        },
                                        {
                                                "name" : {
                                                        "$eq" : "Bagel Land"
                                                }
                                        }
                                ]
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "EPBYMINW8923",
                "port" : 27017,
                "version" : "4.2.1",
                "gitVersion" : "edf6d45851c0b9ee15548f0f847df141764a317e"
        },
        "ok" : 1
}`

`> db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Queens"
                                        }
                                },
                                {
                                        "cuisine" : {
                                                "$eq" : "Pizza"
                                        }
                                }
                        ]
                },
                "queryHash" : "DBDC0200",
                "planCacheKey" : "8F5BB32F",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$and" : [
                                        {
                                                "borough" : {
                                                        "$eq" : "Queens"
                                                }
                                        },
                                        {
                                                "cuisine" : {
                                                        "$eq" : "Pizza"
                                                }
                                        }
                                ]
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "EPBYMINW8923",
                "port" : 27017,
                "version" : "4.2.1",
                "gitVersion" : "edf6d45851c0b9ee15548f0f847df141764a317e"
        },
        "ok" : 1
}`

---
*5. Create an index to make query from task 3.4 covered and provide proof (from explain() or Compass UI) that it is indeed covered*

##### Query:

`db.restaurants.createIndex({ 'grades.8.score': 1 })`

##### Result:

`db.restaurants.find({ 'grades.8.score': { $lt: 7 }}, { _id: 0, name: 1 }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "grades.8.score" : {
                                "$lt" : 7
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "_id" : 0,
                                "name" : 1
                        },
                        "inputStage" : {
                                "stage" : "FETCH",
                                "inputStage" : {
                                        "stage" : "IXSCAN",
                                        "keyPattern" : {
                                                "grades.8.score" : 1
                                        },
                                        "indexName" : "grades.8.score_1",
                                        "isMultiKey" : false,
                                        "isUnique" : false,
                                        "isSparse" : false,
                                        "isPartial" : false,
                                        "indexVersion" : 1,
                                        "direction" : "forward",
                                        "indexBounds" : {
                                                "grades.8.score" : [
                                                        "[-1.#INF, 7.0)"
                                                ]
                                        }
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "user-��",
                "port" : 27017,
                "version" : "3.2.22",
                "gitVersion" : "105acca0d443f9a47c1a5bd608fd7133840a58dd"
        },
        "ok" : 1
}`
