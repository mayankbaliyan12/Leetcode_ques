from collections import Counter


class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize > 0:
            return False

        # hand.sort()
        hMap = Counter(hand)
        setMap = set(hMap.keys())

        while len(setMap) > 0:
            start = sorted(setMap)[0]
            for x in range(0, groupSize):
                if start in hMap:
                    hMap[start] -= 1

                    if hMap[start] <= 0:
                        del hMap[start]
                        setMap.remove(start)
                    start += 1
                else:
                    return False

        return True
