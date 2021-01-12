id = 561

const fs = require('fs');
const request = require('request')

try {  
    var data = fs.readFileSync('groupproxies.txt', 'utf8')
    proxies = data.toString().split("\n")
} catch(e) {
    console.log('Error:', e.stack);
}

id = Math.round(Math.random(1,3000000) * 3000000)
currentproxy = 0
thelength = proxies.length

setInterval(()=>{
        request("https://groups.roblox.com/v1/groups/"  + id, (err,res,dat)=>{
            dat = JSON.parse(dat)
                if (dat.errors) {
                    console.log('doesnt exist or is invalid')
                } else {
                    if (dat.publicEntryAllowed == true) {
                        console.log('group is unlocked: ' + id)
                        if (dat.owner == null) {
                            console.log('ownerless and joinable!')
                        }
                    } else {
                        console.log('group is locked: ' + id)
                    }
                }
    
            id = Math.round(Math.random(1,3000000) * 3000000)
        })
}, 5000)