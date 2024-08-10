package res

import "embed"

//go:embed public/index.html
var StaticIndex embed.FS
