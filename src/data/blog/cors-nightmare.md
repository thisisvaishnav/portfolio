---
title: "CORS Nightmare: When My Go Backend Met Next.js Frontend"
date: "2024-01-15"
excerpt: "A deep dive into the CORS issues I faced while connecting a Go backend with a Next.js frontend, and how I finally solved them."
---

# CORS Nightmare: When My Go Backend Met Next.js Frontend

It was 2 AM, and I was staring at the dreaded error in my browser console:

```
Access to fetch at 'http://localhost:8080/api/users' from origin 'http://localhost:3000' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on 
the requested resource.
```

Sound familiar? Let me walk you through my journey of pain, confusion, and eventual enlightenment.

## The Setup

I was building a simple full-stack application:
- **Backend**: Go with Gin framework running on `localhost:8080`
- **Frontend**: Next.js running on `localhost:3000`

Everything seemed straightforward until I tried to make my first API call.

## The Problem

CORS (Cross-Origin Resource Sharing) is a browser security feature that blocks requests from one domain to another unless the server explicitly allows it. My Go backend wasn't configured to handle CORS requests from my Next.js frontend.

## Failed Attempts

### Attempt 1: The Naive Approach

I thought I could just add a simple header:

```go
c.Header("Access-Control-Allow-Origin", "*")
```

This worked for GET requests, but POST requests were still failing. Why? Because browsers send a preflight OPTIONS request first, and my backend wasn't handling it.

### Attempt 2: Manual Headers Everywhere

I started adding headers to every single endpoint:

```go
func setupResponse(w *http.ResponseWriter, req *http.Request) {
    (*w).Header().Set("Access-Control-Allow-Origin", "*")
    (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    (*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Authorization")
}
```

This was messy, repetitive, and I kept forgetting to add it to new endpoints.

## The Solution

Finally, I discovered the proper way: using Gin's CORS middleware.

```go
import "github.com/gin-contrib/cors"

func main() {
    r := gin.Default()
    
    config := cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }
    
    r.Use(cors.New(config))
    
    // Your routes here
}
```

This solved all my CORS issues in one clean configuration.

## Lessons Learned

1. **Understand preflight requests**: Browsers send OPTIONS requests before actual requests for certain conditions.
2. **Be specific with origins**: Don't use `"*"` in production - specify exact origins.
3. **Use middleware**: Don't handle CORS manually in each endpoint.
4. **Test with credentials**: If you're sending cookies or auth headers, you need `AllowCredentials: true`.

## Pro Tips

- In development, you can also use Next.js rewrites to proxy API calls:

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ]
  },
}
```

- For production, consider putting both services behind a reverse proxy like Nginx to avoid CORS altogether.

The CORS nightmare taught me an important lesson: always understand the security features you're working with, don't just try to bypass them. What seemed like an annoying roadblock was actually protecting users from malicious websites.

Happy coding, and may your CORS errors be few and far between! 