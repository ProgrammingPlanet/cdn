async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function randStr(n)
{
    let charset = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let r = ''    
    while(n--)
    {
        r += charset[Math.round(100*Math.random())%charset.length]    
    }
    return r
}
