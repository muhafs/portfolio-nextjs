export default function joinWithAnd(arr: string[]): string {
	if (arr.length === 0) return '' // If the array is empty, return an empty string
	if (arr.length === 1) return arr[0] // If there's only one item, return it directly
	if (arr.length === 2) return arr.join(' and ') // If there are two items, join them with 'and'

	// For arrays with more than two items, join with commas and add 'and' before the last item
	const lastItem = arr.pop() // Remove the last item from the array
	return arr.join(', ') + ' and ' + lastItem // Join the remaining items with commas, then add 'and' before the last item
}
