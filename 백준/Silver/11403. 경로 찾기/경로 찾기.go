package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	s = bufio.NewScanner(os.Stdin)
	w = bufio.NewWriter(os.Stdout)

	matrix [][]int
	result [][]int
)

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	hw := scanLines()
	n := hw[0]

	matrix = make([][]int, n)
	result = make([][]int, n)

	for i := 0; i < n; i++ {
		line := scanLines()
		matrix[i] = line
	}
	//플로이드 워셜 방법
	for k := 0; k < n; k++ { //중간지점 체크 방문하는지
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				if matrix[i][k] == 1 && matrix[k][j] == 1 {
					matrix[i][j] = 1
				}
			}
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			fmt.Fprintf(w, "%d ", matrix[i][j])
		}
		fmt.Fprintln(w)
	}

}

func scanLines() []int {
	s.Scan()
	parts := strings.Fields(s.Text())
	num := make([]int, len(parts))

	for i, v := range parts {
		num[i], _ = strconv.Atoi(v)
	}
	return num
}
