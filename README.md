# Playing with Bogosort (Memesort)

## Definition

Bogosort is a highly inefficient sorting algorithm that works by shuffling a list of elements randomly until it happens to be sorted. The algorithm has an average-case time complexity of O(n\*n!), where n is the number of elements to be sorted.

The algorithm's steps are as follows:

Check if the list is already sorted. If it is, then return the list.

If the list is not sorted, shuffle the list randomly.

Check if the list is sorted. If it is not, go back to step 2.

Once the list is sorted, return it.

Due to its random nature, bogosort is highly unreliable and should not be used for any practical applications. However, it can be useful for educational purposes to illustrate the importance of using efficient sorting algorithms.

## Screenshot

![screenshot](/public/screenshot.png)
