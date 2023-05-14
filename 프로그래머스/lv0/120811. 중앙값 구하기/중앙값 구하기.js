function solution(array) {
    var sort = array.sort(function(a,b) {return b-a;});
    var center = Math.floor((array.length)/2);
    var answer = sort[center];
    console.log(sort);
    return answer;
}