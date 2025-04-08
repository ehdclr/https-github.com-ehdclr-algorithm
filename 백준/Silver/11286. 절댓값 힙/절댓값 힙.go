package main

import (
	"bufio"
	"container/heap"
	"fmt"
	"os"
	"strconv"
)

type Item struct {
	val int
}

type AbsHeap []Item

func (h AbsHeap) Len() int { return len(h) }
func (h AbsHeap) Less(i, j int) bool {
	absI, absJ := abs(h[i].val), abs(h[j].val)
	if absI == absJ {
		return h[i].val < h[j].val
	}

	return absI < absJ
}

func (h AbsHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *AbsHeap) Push(x any) {
	*h = append(*h, x.(Item))
}

func (h *AbsHeap) Pop() any {
	old := *h
	n := len(old)
	val := old[n-1]
	*h = old[:n-1]
	return val
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

var (
	s = bufio.NewScanner(os.Stdin)
	w = bufio.NewWriter(os.Stdout)
)

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	T := scanInt()

	h := &AbsHeap{}
	heap.Init(h)

	for T > 0 {
		T--
		num := scanInt()
		if num == 0 {
			if h.Len() == 0 {
				fmt.Fprintln(w, 0)
			} else {
				fmt.Fprintln(w, heap.Pop(h).(Item).val)
			}
		} else {
			heap.Push(h, Item{val: num})
		}

	}

}

func scanInt() int {
	s.Scan()
	val, _ := strconv.Atoi(s.Text())
	return val
}
