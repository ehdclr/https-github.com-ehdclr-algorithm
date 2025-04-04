package main

import (
	"bufio"
	"container/heap"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// ---------- 일반화된 Heap 구조체 ----------
type Heap struct {
	data []int
	less func(a, b int) bool
}

func (h Heap) Len() int           { return len(h.data) }
func (h Heap) Less(i, j int) bool { return h.less(h.data[i], h.data[j]) }
func (h Heap) Swap(i, j int)      { h.data[i], h.data[j] = h.data[j], h.data[i] }

func (h *Heap) Push(x any) {
	h.data = append(h.data, x.(int))
}

func (h *Heap) Pop() any {
	n := len(h.data)
	val := h.data[n-1]
	h.data = h.data[:n-1]
	return val
}

func (h *Heap) Peek() (int, bool) {
	if len(h.data) == 0 {
		return 0, false
	}
	return h.data[0], true
}

func (h *Heap) Empty() bool {
	return len(h.data) == 0
}

// ---------- 입력 처리 ----------
var (
	s = bufio.NewScanner(os.Stdin)
	w = bufio.NewWriter(os.Stdout)
)

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	T := scanInt()
	for t := 0; t < T; t++ {
		k := scanInt()

		minHeap := &Heap{less: func(a, b int) bool { return a < b }}
		maxHeap := &Heap{less: func(a, b int) bool { return a > b }}
		heap.Init(minHeap)
		heap.Init(maxHeap)
		countMap := make(map[int]int)

		for i := 0; i < k; i++ {
			parts := scanWords()
			cmd := parts[0]
			num, _ := strconv.Atoi(parts[1])

			if cmd == "I" {
				heap.Push(minHeap, num)
				heap.Push(maxHeap, num)
				countMap[num]++
			} else {
				if num == 1 {
					// 최대값 삭제
					for !maxHeap.Empty() {
						v := heap.Pop(maxHeap).(int)
						if countMap[v] > 0 {
							countMap[v]--
							break
						}
					}
				} else {
					// 최소값 삭제
					for !minHeap.Empty() {
						v := heap.Pop(minHeap).(int)
						if countMap[v] > 0 {
							countMap[v]--
							break
						}
					}
				}
			}
		}

		// 유효한 최대값 추출
		var maxVal *int = nil
		for !maxHeap.Empty() {
			v := heap.Pop(maxHeap).(int)
			if countMap[v] > 0 {
				maxVal = &v
				break
			}
		}

		// 유효한 최소값 추출
		var minVal *int = nil
		for !minHeap.Empty() {
			v := heap.Pop(minHeap).(int)
			if countMap[v] > 0 {
				minVal = &v
				break
			}
		}

		if maxVal == nil || minVal == nil {
			fmt.Fprintln(w, "EMPTY")
		} else {
			fmt.Fprintf(w, "%d %d\n", *maxVal, *minVal)
		}
	}
}

// ---------- 유틸 ----------
func scanWords() []string {
	s.Scan()
	return strings.Fields(s.Text())
}

func scanInt() int {
	s.Scan()
	v, _ := strconv.Atoi(s.Text())
	return v
}
