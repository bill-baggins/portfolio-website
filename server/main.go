package main

import (
	"fmt"
	"os"
	app "server/src"
	"strconv"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	app := app.New()
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	err := app.Listen(fmt.Sprintf(":%d", port))
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
