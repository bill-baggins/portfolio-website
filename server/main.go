package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Static("/", "../client/public")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(200).SendString("Hello World!")
	})

	log.Fatal(app.Listen(":8080"))
}
