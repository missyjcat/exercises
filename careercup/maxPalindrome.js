/*
Find the length of a maximum palindrome subset in an array. For example: in 1, 2, 4, 1 the maximum palindrome subset is 1, 2, 1 and the answer is 3

input: array
output: length of the subset

palindrome = same forward as it is backwards
start at each end?
we only have to check half of the input
front half has to match back half,
slice the non palindrome characters

2,3,3,3,4,3,2
2,3,4,3,2
OR 
2,3,3,3,2
either way - 5

1,2,2,1
1,2,2,1
4

1,3,5,7,4,3,2,1
1,1
2

OR

1,3,3,1
4

*/
