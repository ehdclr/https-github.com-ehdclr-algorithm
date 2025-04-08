package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	s      = bufio.NewScanner(os.Stdin)
	w      = bufio.NewWriter(os.Stdout)
	n, m   int
	maxSum int

	visited [][]bool
	board   [][]int
	dx      = []int{0, 0, -1, 1}
	dy      = []int{-1, 1, 0, 0}
)

func main() {

	defer w.Flush()
	s.Split(bufio.ScanLines)

	hw := scanLines()
	n, m = hw[0], hw[1]

	board = make([][]int, n)
	visited = make([][]bool, n)

	for i := 0; i < n; i++ {
		visited[i] = make([]bool, m)
		line := scanLines()
		board[i] = line
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			visited[i][j] = true
			bt(i, j, 1, board[i][j])
			visited[i][j] = false
			extraShapes(i, j)
		}
	}

	fmt.Fprintln(w, maxSum)
}

func bt(x, y, depth, sum int) {
	if depth == 4 {
		if maxSum < sum {
			maxSum = sum
		}
		return
	}

	for i := 0; i < 4; i++ {
		nx, ny := x+dx[i], y+dy[i]
		if nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] {
			visited[nx][ny] = true
			bt(nx, ny, depth+1, sum+board[nx][ny])
			visited[nx][ny] = false
		}
	}
}

func extraShapes(x, y int) {

	shapes := [][][]int{
		{{0, 0}, {-1, 0}, {1, 0}, {0, -1}},
		{{0, 0}, {-1, 0}, {1, 0}, {0, 1}},
		{{0, 0}, {0, 1}, {1, 0}, {0, -1}},
		{{0, 0}, {0, 1}, {-1, 0}, {0, -1}},
	}

	for _, shape := range shapes {
		sum := 0
		founded := true

		for _, v := range shape {
			nx, ny := x+v[0], y+v[1]
			if nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] {
				sum += board[nx][ny]
			} else {
				founded = false
				break
			}

		}

		if founded {
			if maxSum < sum {
				maxSum = sum
			}
		}

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
