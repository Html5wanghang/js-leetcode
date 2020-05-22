嗯，直接数数，然后取最小就可以了。简洁明了速度快
```
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        l = [
            text.count('a'), 
            text.count('b'), 
            int(text.count('l')/2), 
            text.count('n'), 
            int(text.count('o')/2),
        ]
        return min(l)
```


