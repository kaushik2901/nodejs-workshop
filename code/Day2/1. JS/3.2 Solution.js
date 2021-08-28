const users = [
    {
        "name": "Luffy",
        "city": "Ahmedabad",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Emma"
            },
            {
                "name": "Gabi"
            }
        ]
    },
    {
        "name": "Gabi",
        "city": "New York",
        "countryCode": "USA",
        "friends": [
            {
                "name": "Luffy"
            },
            {
                "name": "Norman"
            }
        ]
    },
    {
        "name": "Emma",
        "city": "Vadodara",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Norman"
            }
        ]
    },
    {
        "name": "Norman",
        "city": "Vadodara",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Emma"
            }
        ]
    }
]

const createFilteredArray = (inputArray, isValid) => {
    const resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(isValid(inputArray[i])) {
            resultArray.push(inputArray[i]);
        }
    }
    return resultArray;
}

//Todo: Write findUsersFromINDIA
const findUsersFromINDIA = (user) => {
    // TODO return true or false based on given condtion
    return user.countryCode === "IND"
}

//Todo: Write findUsersWhoseFriendIsNorman
const findUsersWhoseFriendIsNorman = (user) => {
    // TODO return true or false based on given condtion
    return user.friends.find(friend => friend.name === "Norman")
}


const prettyConsoleLog = (message, data) => console.log(message, JSON.stringify(data, null, 4)) 
prettyConsoleLog("findUsersFromINDIA", createFilteredArray(users, findUsersFromINDIA));
prettyConsoleLog("findUsersWhoseFriendIsNorman", createFilteredArray(users, findUsersWhoseFriendIsNorman));


//Better way to write same function

const filteredData = users.filter(user => user.countryCode === "IND");
prettyConsoleLog("findUsersFromINDIA", filteredData)
prettyConsoleLog("findUsersWhoseFriendIsNorman",users.filter(user => user.friends.find(friend => friend.name === "Norman")));


//Pure vs Impure Function ?