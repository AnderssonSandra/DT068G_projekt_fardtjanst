/*
cookiestrin to object
document.cookie.split(';').map(cookie => cookie.split('=')).reduce((aaccumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
*/