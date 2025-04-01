package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var (
	n, m           int
	startX, startY int
	matrix         [][]int
	visited        [][]bool
	answer         [][]int
	s              = bufio.NewScanner(os.Stdin)
	w              = bufio.NewWriter(os.Stdout)
	dx             = []int{0, 0, -1, 1}
	dy             = []int{-1, 1, 0, 0}
)

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	hw := scanLines()
	n, m := hw[0], hw[1]

	matrix = make([][]int, n)
	visited = make([][]bool, n)
	answer = make([][]int, n)

	for i := 0; i < n; i++ {
		matrix[i] = scanLines()
		visited[i] = make([]bool, m)
		answer[i] = make([]int, m)
		for j := 0; j < m; j++ {
			if matrix[i][j] == 2 {
				startX, startY = i, j
			}
		}
	}

	index := 0
	type point struct{ x, y int }
	queue := []point{{startX, startY}}
	visited[startX][startY] = true

	for index < len(queue) {
		curr := queue[index]
		index++

		for i := 0; i < 4; i++ {
			nx, ny := curr.x+dx[i], curr.y+dy[i]

			if nx < 0 || ny < 0 || nx >= n || ny >= m {
				continue
			}
			if visited[nx][ny] || matrix[nx][ny] == 0 {
				continue
			}

			visited[nx][ny] = true
			answer[nx][ny] = answer[curr.x][curr.y] + 1
			queue = append(queue, point{nx, ny})

		}

	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if matrix[i][j] == 0 || matrix[i][j] == 2 {
				fmt.Fprintf(w, "0 ")
			} else if !visited[i][j] {
				fmt.Fprintf(w, "-1 ")
			} else {
				fmt.Fprintf(w, "%d ", answer[i][j])
			}
		}
		fmt.Fprintln(w)
	}

}

func scanLines() []int {
	s.Scan() // 한줄 씩 읽기
	parts := strings.Fields(s.Text())
	nums := make([]int, len(parts))

	for i, part := range parts {
		nums[i], _ = strconv.Atoi(part)
	}

	return nums
}
