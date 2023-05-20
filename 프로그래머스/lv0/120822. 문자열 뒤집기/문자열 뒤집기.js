function solution(my_string) {
    var answer = my_string.split('');
    var reverse = answer.reverse();
    answer = reverse.join('');
    return answer;
}