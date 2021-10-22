const os = require("os");

// gives the line delimiter sequence. It's \n on Linux and macOS, and \r\n on Windows.
// os.EOL 

// Return the string that identifies the underlying architecture, like arm, x64, arm64.
console.log(os.arch()) 

// Return information on the CPUs available on your system.
console.log(os.cpus()) 

// Return the number of bytes that represent the free memory in the system.
console.log(os.freemem()) 

//Returns the number of bytes that represent the total memory available in the system.
console.log(os.totalmem()) 

// Return the path to the home directory of the current user.
console.log(os.homedir()) 

//Return the host name.
console.log(os.hostname()) 

// Returns the details of the network interfaces available on your system.
console.log(os.networkInterfaces()) 

// Return the platform that Node.js was compiled for:
console.log(os.platform()) 

// Returns a string that identifies the operating system release number
console.log(os.release()) 

// Returns the path to the assigned temp folder.
console.log(os.tmpdir()) 

// Identifies the operating system:
console.log(os.type()) 

// Returns the number of seconds the computer has been running since it was last rebooted.
console.log(os.uptime()) 

// Returns an object that contains the current username, uid, gid, shell, and homedirdata
console.log(os.userInfo()) 
