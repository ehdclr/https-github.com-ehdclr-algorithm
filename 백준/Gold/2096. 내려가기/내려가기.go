package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	s := bufio.NewScanner(os.Stdin)
	s.Scan()
	n, _ := strconv.Atoi(s.Text())

	var prevMax = make([]int, 3)
	var prevMin = make([]int, 3)

	// 첫 줄 초기화
	s.Scan()
	firstLine := strings.Fields(s.Text())
	for i := 0; i < 3; i++ {
		val, _ := strconv.Atoi(firstLine[i])
		prevMax[i] = val
		prevMin[i] = val
	}

	// 슬라이딩 윈도우
	for i := 1; i < n; i++ {
		s.Scan()
		line := strings.Fields(s.Text())
		a, _ := strconv.Atoi(line[0])
		b, _ := strconv.Atoi(line[1])
		c, _ := strconv.Atoi(line[2])

		newMax := make([]int, 3)
		newMin := make([]int, 3)

		newMax[0] = max(prevMax[0], prevMax[1]) + a
		newMax[1] = max(prevMax[0], max(prevMax[1], prevMax[2])) + b
		newMax[2] = max(prevMax[1], prevMax[2]) + c

		newMin[0] = min(prevMin[0], prevMin[1]) + a
		newMin[1] = min(prevMin[0], min(prevMin[1], prevMin[2])) + b
		newMin[2] = min(prevMin[1], prevMin[2]) + c

		prevMax = newMax
		prevMin = newMin
	}

	fmt.Printf("%d %d\n", max(prevMax[0], max(prevMax[1], prevMax[2])), min(prevMin[0], min(prevMin[1], prevMin[2])))
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
