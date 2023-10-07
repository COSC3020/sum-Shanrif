function sum(a) {
    //changed how sum was initialized because it needed to be zero and it was not.
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}