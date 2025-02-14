package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()

	// 첫 번째 입력: 명령어 개수
	scanner.Scan()
	m, _ := strconv.Atoi(scanner.Text())

	// Set을 map[int]bool로 구현
	set := make(map[int]bool)
	allSet := make(map[int]bool) // 1~20을 저장할 기본 셋
	for i := 1; i <= 20; i++ {
		allSet[i] = true
	}

	for i := 0; i < m; i++ {
		scanner.Scan()
		cmd := strings.Fields(scanner.Text())

		switch cmd[0] {
		case "add":
			num, _ := strconv.Atoi(cmd[1])
			set[num] = true
		case "remove":
			num, _ := strconv.Atoi(cmd[1])
			set[num] = false // delete를 사용하지 않고 false로 처리하여 메모리 유지
		case "check":
			num, _ := strconv.Atoi(cmd[1])
			if set[num] {
				fmt.Fprintln(writer, 1)
			} else {
				fmt.Fprintln(writer, 0)
			}
		case "toggle":
			num, _ := strconv.Atoi(cmd[1])
			set[num] = !set[num]
		case "all":
			for k := range allSet {
				set[k] = true
			}
		case "empty":
			for k := range set {
				set[k] = false
			}
		}
	}
}