package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	maxSum  int
	n, m    int
	s       = bufio.NewScanner(os.Stdin)
	w       = bufio.NewWriter(os.Stdout)
	visited [][]bool
	board   [][]int
)

type Coordinates struct {
	x int
	y int
}

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)
	hw := scanInt()
	n, m = hw[0], hw[1]

	visited = make([][]bool, n)
	board = make([][]int, n)

	for i := 0; i < n; i++ {
		nums := scanInt() // ← 한 줄만 읽음
		board[i] = nums   // ← 그대로 전체 할당
		visited[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			visited[i][j] = true //시작점도 bt처럼 해줘야함
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

	dx := []int{0, 0, -1, 1}
	dy := []int{-1, 1, 0, 0}

	for i := 0; i < 4; i++ {
		nx := x + dx[i]
		ny := y + dy[i]
		if nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] {
			visited[nx][ny] = true
			bt(nx, ny, depth+1, sum+board[nx][ny])
			visited[nx][ny] = false
		}
	}

}

// 백트래킹으로 못만드는 모양은 처리
func extraShapes(x, y int) {
	shapes := [][][]int{
		{{0, 0}, {0, -1}, {0, 1}, {1, 0}},
		{{0, 0}, {0, -1}, {0, 1}, {-1, 0}},
		{{0, 0}, {0, -1}, {-1, 0}, {1, 0}},
		{{0, 0}, {0, 1}, {-1, 0}, {1, 0}},
	}

	for _, shape := range shapes {
		sum := 0
		isValid := true
		for _, dir := range shape {
			nx, ny := x+dir[0], y+dir[1]

			if nx >= 0 && ny >= 0 && nx < n && ny < m {
				sum += board[nx][ny]
			} else {
				isValid = false
				break
			}
		}
		if isValid {
			if maxSum < sum {
				maxSum = sum
			}
		}
	}
}

func scanInt() []int {
	s.Scan()
	parts := strings.Fields(s.Text())
	nums := make([]int, len(parts))

	for i, v := range parts {
		nums[i], _ = strconv.Atoi(v)
	}

	return nums
}
