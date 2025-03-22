package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	input = input[:len(input)-1] //개행문자 제거

	stack := []rune{}

	for _, char := range input {
		stack = append(stack, char)

		if len(stack) >= 4 {
			if string(stack[len(stack)-4:]) == "PPAP" {
				stack = stack[:len(stack)-4]
				stack = append(stack, 'P')
			}

		}

	}

	if string(stack) == "P" {
		fmt.Println("PPAP")
	} else {
		fmt.Println("NP")
	}
}
