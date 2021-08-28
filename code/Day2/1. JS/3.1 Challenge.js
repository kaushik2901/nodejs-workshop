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


const createFilteredArray = (array, isValid) => {
    const arr = [];
    for(let i = 0; i < array.length; i++) {
        if(isValid(users[i])) {
            arr.push(users[i]);
        }
    }
    return arr;
}

//Todo: Write findUsersFromINDIA
const findUsersFromINDIA = (user) => {
    // TODO return true or false based on given condtion
    return user.countryCode == "IND"
}

//Todo: Write findUsersWhoseFriendIsNorman
const findUsersWhoseFriendIsNorman = (user) => {
    // TODO return true or false based on given condtion
    return user.friends.find(friend => friend.name == "Norman")
}

console.log(createFilteredArray(users, findUsersFromINDIA));
console.log(createFilteredArray(users, findUsersWhoseFriendIsNorman));