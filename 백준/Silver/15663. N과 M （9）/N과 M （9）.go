package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

var (
	n, m    int
	nums    []int
	visited []bool
	result  []int
	s       = bufio.NewScanner(os.Stdin)
	w       = bufio.NewWriter(os.Stdout)
)

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	hw := scanLines()
	n, m = hw[0], hw[1] // <- 여기 수정

	nums = scanLines()
	sort.Ints(nums)

	visited = make([]bool, n)
	result = make([]int, 0, m)

	bt(0)
}

func scanLines() []int {
	s.Scan()
	parts := strings.Fields(s.Text())
	res := make([]int, len(parts))
	for i, part := range parts {
		res[i], _ = strconv.Atoi(part)
	}
	return res
}

func bt(depth int) {
	if depth == m {
		for _, v := range result {
			fmt.Fprintf(w, "%d ", v)
		}
		fmt.Fprintln(w)
		return
	}

	used := make(map[int]bool)

	for i, v := range nums {
		if visited[i] || used[v] {
			continue
		}

		visited[i] = true
		used[v] = true
		result = append(result, v)

		bt(depth + 1)

		result = result[:len(result)-1]
		visited[i] = false
	}
}
