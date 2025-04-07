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
)

type State struct {
	num int
	cmd string
}

func main() {
	defer w.Flush()
	s.Split(bufio.ScanLines)

	T := scanInt()
	for T > 0 {
		T--

		parts := scanInts()
		start, target := parts[0], parts[1]
		visited := make([]bool, 10000)
		queue := make([]State, 0, 10000)
		visited[start] = true
		queue = append(queue, State{num: start, cmd: ""})

		found := false

		for i := 0; i < len(queue); i++ {
			cur := queue[i]

			if cur.num == target {
				fmt.Fprintln(w, cur.cmd)
				found = true
				break
			}

			// D
			d := (cur.num * 2) % 10000
			if !visited[d] {
				visited[d] = true
				queue = append(queue, State{d, cur.cmd + "D"})
			}

			// S
			s := cur.num - 1
			if s < 0 {
				s = 9999
			}
			if !visited[s] {
				visited[s] = true
				queue = append(queue, State{s, cur.cmd + "S"})
			}

			// L
			l := (cur.num%1000)*10 + cur.num/1000
			if !visited[l] {
				visited[l] = true
				queue = append(queue, State{l, cur.cmd + "L"})
			}

			// R
			r := (cur.num%10)*1000 + cur.num/10
			if !visited[r] {
				visited[r] = true
				queue = append(queue, State{r, cur.cmd + "R"})
			}
		}

		if !found {
			fmt.Fprintln(w, "")
		}
	}
}

func scanInt() int {
	s.Scan()
	v, _ := strconv.Atoi(s.Text())
	return v
}

func scanInts() []int {
	s.Scan()
	parts := strings.Fields(s.Text())
	num := make([]int, len(parts))
	for i, v := range parts {
		num[i], _ = strconv.Atoi(v)
	}
	return num
}
